import React from'react';
import {createSlice,current} from '@reduxjs/toolkit'


 const initialState = {
   items:{}
 }
  const dataSlice =  createSlice({
                  name : 'data',
                  initialState:initialState, 
                  reducers : {
                               addData(state, action)
                              {
                                const {name,type,price,description,category,rating,numberOfRatings}=action.payload
                                const newItem={
                                  name,
                                  type,
                                  price,
                                  description,
                                  rating,
                                  numberOfRatings
                                }
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
                                   } else {
                                     console.log('added to existing')
                                     state.items[category].push(newItem)
                                   }

                                }
                                   console.log(current(state.items))
                              }

                  },
               
   })
   export const dataActions = dataSlice.actions;
export const dataReducer= dataSlice.reducer;