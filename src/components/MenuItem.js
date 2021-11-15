import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import Header from '../components/Header'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon } from "react-native-elements";
import { colors } from '../global/styles'
// import { restaurantMenuData } from '../global/Data'
// import { menuCountActions } from '../store/menuCountSlice'
// import { cartActions } from '../store/cartSlice'
import Star from "./Star";
import { dataActions } from '../store/dataSlice'

// let item2;
const MenuItem=({item,id,quantity, cate})=>{
    const dispatch = useDispatch()

    let item2={...item}
    item2["vendor_id"]=id
    item2["category"]=cate

    const deleteItem=()=>{
        // console.log(item2);
        Alert.alert(
            `Delete Item`,
            `Are you sure, you want to Delete ${item.name}?`,
            [
              {
                text:"yes", 
                onPress:()=>dispatch(dataActions.removeItem(item2)),
              }, 
              
              {
                text:"no"
              }
            ]
          )
    }

    return(
        <View style={[styles.container, {backgroundColor:! item2.available?colors.grey5:colors.cardbackground}]}>
            <View style={{width:"70%", justifyContent:"space-around", height:"100%", opacity:! item2.available?0.5:1, }}>
                
                <View style={{borderWidth:1, height:20, width:20, justifyContent:"center", alignItems:"center", borderColor:item.veg?colors.green:colors.red}}>
                    <View style={{height:10, width:10, borderRadius:10, backgroundColor:item.veg?colors.green:colors.red}}/>
                </View>

                <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                <Text numberOfLines={2} style={{color:colors.black2}}>{item.description}</Text>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>₹ {item.price}</Text>
                    <Text style={{fontWeight:"bold", marginLeft:20, color:"red", display:item.available?"none":"flex"}}>Not Available</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Star rating={item.rating} review={item.rated_by}/>
                    <View style={{marginLeft:10, borderColor:colors.statusBar, borderWidth:1, paddingHorizontal:5, borderRadius:5, display:item.bestseller?"flex":"none" }}>
                        <Text style={{color:colors.statusBar, fontSize:12, fontWeight:"bold"}}>Bestseller</Text>
                    </View>
                </View>
            </View>

            <View style={{justifyContent:"space-evenly"}}>
                <TouchableOpacity style={[styles.qtyButtons, {backgroundColor:colors.grey6}]}
                    onPress={() => {
                        dispatch(dataActions.disableItem(item2));
                    }}
                >
                    {/* <Text style={styles.qtyText}>{item2.disable?"Enable":"Disable"}</Text> */}
                    <Icon name={item2.available?"visibility":"visibility-off"} color={! item2.available?colors.green:colors.buttons}/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.qtyButtons, {backgroundColor:colors.grey6}]}
                    onPress={() => {deleteItem()}}
                >
                    {/* <Text style={styles.qtyText}>Delete</Text> */}
                    <Icon name="delete" color={colors.red} size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: colors.grey5,
        // backgroundColor:item2.disable===false?colors.cardbackground:colors.gray,
        flexDirection:"row",
        justifyContent:"space-between",
        // marginBottom:1,
        borderBottomColor:colors.grey5,
        borderBottomWidth:1,
        height:180,
    },

    headerText: {
        fontFamily: 'nunito',
        letterSpacing: 1,
        fontSize: 30,
        textDecorationLine: 'underline'
    },
    itemContainer: {
        backgroundColor: colors.cardbackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.buttons
    },
    itemTitle: {
        fontFamily: 'nunito',
        fontSize: 20,
        letterSpacing: 1,
        color: colors.grey1
    },
    itemPrice: {
        fontFamily: 'nunito-bold',
        fontSize: 15,
        letterSpacing: 1,
        color: colors.grey2
    },
    vegContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    vegText: {
        fontFamily: 'nunito',
        marginLeft: 5,
        letterSpacing: 1,
        color: colors.grey2
    },
    qtyButtons: {
        backgroundColor: colors.buttons,
        // backgroundColor:colors.red,
        borderRadius: 12,
        // borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        // marginBottom:5,
        paddingVertical:5,
        paddingHorizontal:10,
    },
    qtyText: {
        marginHorizontal: 10,
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: colors.cardbackground
    },
    quantity: {
        marginHorizontal: 5,
        fontSize: 17,
        fontFamily: 'nunito-bold',
        color: colors.grey1
    },

    button:{
        // backgroundColor:colors.statusBar

        // backgroundColor:"red",
        // color:"red",
    }
})