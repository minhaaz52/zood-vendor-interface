import React from'react';
import {createSlice,current} from '@reduxjs/toolkit'


 const initialState = {
  //  items:{"Dessert":[], "Starter":[], "MainCourse":[]}

  items:{"Dessert":[], "Starters":[], "Main Course":[]},
  vendor_id:"1000001",
  menu_id:"1000001"
 }

  const dataSlice =  createSlice({
                  name : 'data',
                  initialState:initialState,
                  reducers : {

                              updateVendor(state, action){
                                console.log("payload");
                                console.log(action.payload);
                                state.vendor_id=action.payload.vendorId,
                                state.menu_id=action.payload.menuId

                                // console.log(state.vendor_id)
                                // console.log(state.menu_id)
                              },

                              updateData(state, action){
                                state.items=action.payload
                                // console.log(state.items);
                              },

                               addData(state, action)
                              {
                                const {itemId, name,veg, price,description,category,rating,numberOfRatings, available, bestSeller, tags}=action.payload
                                
                                const newItem={"item_id":itemId, "name":name, "veg":veg, "price":price, "description":description, "rating":rating, "rated_by":numberOfRatings, "available":available, "bestseller":bestSeller, "tags":tags }

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
                                  // console.log(current(state.items))
                                  // console.log("!!!!!!!!!!!!! Updated items !!!!!!!!!!!!!!!!!!!!!");
                                  // console.log(state.items);

                                  fetch('http://192.168.1.6:8080/db/update-menu', {
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      "updated_by": "system",
                                      "status": "active",
                                      "menu_items": {
                                        "vendor_id": state.vendor_id,
                                        "menu":state.items,
                                      },
                                      "menu_id": state.menu_id,
                                    })
                                  });
                              },

                              removeItem(state, action){
                                // const itemName=action.payload.name
                                const itemCategory=action.payload.category
                                // const itemPrice=action.payload.price
                                // const itemType=action.payload.veg
                                const itemId=action.payload.item_id;
                                
                                state.items[itemCategory].map((item,id)=>{
                                  // if (item.name===itemName && item.veg===itemType && item.price===itemPrice){
                                  //   state.items[itemCategory].splice(id,1);
                                  // }

                                  if (item.item_id===itemId){
                                    state.items[itemCategory].splice(id,1);
                                  }
                                })
                                console.log("item removed");
                                // console.log("----------- New List ----------------")
                                // console.log(state.items);
                                fetch('http://192.168.1.6:8080/db/update-menu', {
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      "updated_by": "system",
                                      "status": "active",
                                      "menu_items": {
                                        "vendor_id": state.vendor_id,
                                        "menu":state.items,
                                      },
                                      "menu_id": state.menu_id,
                                    })
                                  });
                              },

                              disableItem(state, action){
                                // const itemName=action.payload.name
                                const itemCategory=action.payload.category
                                // const itemPrice=action.payload.price
                                // const itemType=action.payload.veg
                                const itemId=action.payload.item_id;

                                state.items[itemCategory].map((item,id)=>{
                                  // if (item.name===itemName && item.veg===itemType && item.price===itemPrice){
                                  //   state.items[itemCategory][id].available=!item.available
                                  // }

                                  if (item.item_id===itemId){
                                    state.items[itemCategory][id].available=! item.available
                                  }
                                })

                                console.log("item availability changed");

                                fetch('http://192.168.1.6:8080/db/update-menu', {
                                  method: 'POST',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({
                                    "updated_by": "system",
                                    "status": "active",
                                    "menu_items": {
                                      "vendor_id": state.vendor_id,
                                      "menu":state.items,
                                    },
                                    "menu_id": state.menu_id,
                                  })
                                });

                              }

                  },
               
   })
   export const dataActions = dataSlice.actions;
export const dataReducer= dataSlice.reducer;