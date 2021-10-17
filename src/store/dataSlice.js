import React from'react';
import {createSlice,current} from '@reduxjs/toolkit'


 const initialState = {
   items:{"Dessert":[], "Starter":[], "MainCourse":[]}
 }

  const dataSlice =  createSlice({
                  name : 'data',
                  initialState:initialState,
                  reducers : {
                               addData(state, action)
                              {
                                const {name,type,price,description,category,rating,numberOfRatings, disable}=action.payload
                                const newItem={ name, type, price, description, rating, numberOfRatings, disable }
                                if(!state.items){
                                  console.log('first item')
                                  let arr=[]
                                  arr.push(newItem)
                                  state.items[category]=arr
                                }
                                else {
                                  if(!(category in state.items)) {
                                    console.log('created new')
                                    let arr=[]
                                    arr.push(newItem)
                                    state.items[category]=arr
                                    console.log(state.items[category])
                                  } 
                                  
                                  else {
                                    console.log('added to existing')
                                    state.items[category].push(newItem)
                                  }
                                }
                                  console.log(current(state.items))
                              },

                              removeItem(state, action){
                                const itemName=action.payload.name
                                const itemCategory=action.payload.category
                                const itemPrice=action.payload.price
                                const itemType=action.payload.type
                                
                                state.items[itemCategory].map((item,id)=>{
                                  if (item.name===itemName && item.type===itemType && item.price===itemPrice){
                                    state.items[itemCategory].splice(id,1);
                                  }
                                })
                              },

                              disableItem(state, action){
                                const itemName=action.payload.name
                                const itemCategory=action.payload.category
                                const itemPrice=action.payload.price
                                const itemType=action.payload.type

                                state.items[itemCategory].map((item,id)=>{
                                  if (item.name===itemName && item.type===itemType && item.price===itemPrice){
                                    state.items[itemCategory][id].disable=!item.disable
                                  }
                                })
                              }

                  },
               
   })
   export const dataActions = dataSlice.actions;
export const dataReducer= dataSlice.reducer;