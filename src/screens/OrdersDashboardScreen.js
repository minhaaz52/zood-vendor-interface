import React, {useState, useEffect} from "react";
import {View,Text,StyleSheet, ScrollView, TextInput, Switch, Dimensions } from 'react-native'
import { useSelector } from "react-redux";
import { colors } from "../global/styles"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from "react-native-elements";

import All from "./FoodCategories/All"
import Starter from "./FoodCategories/Starter";
import Dessert from "./FoodCategories/Dessert";
import MainCourse from "./FoodCategories/MainCourse";


const oTab = createMaterialTopTabNavigator();


const OrdersDashboardScreen = (props) =>{

    const id="1000001"

    const [txt, setTxt]=useState("");
    const [toggle, setToggle]=useState(false);
    const [toggle2, setToggle2]=useState(false);

    const menuItems=useSelector(state=>state.data.items)

    const [dessert, setDessert]=useState(menuItems.Dessert)
    const [starter, setStarter]=useState(menuItems.Starter)
    const [mainCourse, setMainCourse]=useState(menuItems.MainCourse)
    const [all, setAll]=useState({"Starter":starter, "MainCourse":mainCourse, "Dessert":dessert})
    
    useEffect(()=>{
        setDessert(menuItems.Dessert);
        setStarter(menuItems.Starter)
        setMainCourse(menuItems.MainCourse);
        
        fetch("http://192.168.1.6:8080/db/get-menus").then(data=>data.json()).then(data2=>console.log(data2)).catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        setDessert(menuItems.Dessert);
        setStarter(menuItems.Starter)
        setMainCourse(menuItems.MainCourse);
        // setAll(menuItems);
    },[menuItems])
    
    useEffect(()=>{
        setAll({"Starter":starter, "MainCourse":mainCourse, "Dessert":dessert})
    },[dessert, starter, mainCourse])

    useEffect(()=>{
        searchResult();
    },[txt, toggle, toggle2])

    const searchResult=()=>{

        let filterDessert=menuItems.Dessert.filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));
        
        let filterStarter=menuItems.Starter.filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));

        let filterMainCourse=menuItems["MainCourse"].filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));

        if ((toggle && toggle2) || (!toggle && !toggle2)){
            setDessert(filterDessert)
            setStarter(filterStarter)
            setMainCourse(filterMainCourse)
        }
        else if (toggle){
            let fd=filterDessert.filter(x=>x.type==="Veg");
            let fs=filterStarter.filter(x=>x.type==="Veg");
            let fm=filterMainCourse.filter(x=>x.type==="Veg");
            setDessert(fd)
            setStarter(fs)
            setMainCourse(fm)
        }
        else if (toggle2){
            let fd=filterDessert.filter(x=>x.type==="Non-Veg");
            let fs=filterStarter.filter(x=>x.type==="Non-Veg");
            let fm=filterMainCourse.filter(x=>x.type==="Non-Veg");
            setDessert(fd)
            setStarter(fs)
            setMainCourse(fm)
        }
    }



    return(
        <View style={styles.container}>
            <View  style={[styles.header]}>
                <ScrollView>
                    <View style={styles.txtInput}>
                        <View style={{flexDirection:"row"}}>
                            <Icon type="material-community" name="magnify" size={26} style={{marginRight:10}}/>
                            <TextInput placeholder="Search in Menu" value={txt} onChangeText={(e)=>{setTxt(e)}} style={{width:"80%"}}/>
                        </View>
                        <Icon type="material" name="close" size={26} onPress={()=>{setTxt("")}}/>
                    </View>

                    <View style={{flexDirection:"row", paddingLeft:10, alignItems:"flex-start", marginTop:10}}>
                        <Switch
                            trackColor={{false: colors.gray, true: colors.green}}
                            thumbColor={colors.cardbackground}
                            ios_backgroundColor={colors.gray}
                            onValueChange={(val)=>{setToggle(val)}}
                            value={toggle}
                        />

                        <Text style={{marginRight:20, marginTop:3, marginLeft:5}}>Veg</Text>

                        <Switch
                            trackColor={{false: colors.gray, true: colors.red}}
                            thumbColor={colors.cardbackground}
                            ios_backgroundColor={colors.gray}
                            onValueChange={(val) => {setToggle2(val)}}
                            value={toggle2}
                        />

                        <Text style={{marginTop:3, marginLeft:5}}>Non Veg</Text>
                    </View>
                </ScrollView>
            </View>

            <oTab.Navigator
                tabBarOptions={{
                    activeTintColor:colors.statusBar,
                    inactiveTintColor:colors.black,
                    fontWeight:"bold",
                    style:{
                        backgroundColor:colors.cardbackground,
                    },
                    tabStyle:{
                        width:120,
                    },
                    indicatorStyle:{backgroundColor:colors.statusBar},
                    scrollEnabled:true,
                }}

                initialLayout={{
                    width:Dimensions.get("window").width
                }}
            >
                <oTab.Screen name="All" children={()=><All list={all} id={id}/>}/>
                <oTab.Screen name="Starter" children={()=><Starter list={starter} id={id}/>}/>
                <oTab.Screen name="Main Course" children={()=><MainCourse list={mainCourse} id={id}/>}/>
                <oTab.Screen name="Dessert" children={()=><Dessert list={dessert} id={id}/>}/>
            </oTab.Navigator>
        </View>
    );
}


export default OrdersDashboardScreen

const styles=StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        // backgroundColor: colors.grey5,
        backgroundColor:colors.cardbackground,
        marginTop:1,
        // position:"relative",
    },

    header:{
        height:100,
        // flex:1,
        marginBottom:1,
        backgroundColor:colors.cardbackground,
        // elevation:5,
    },

    txtInput:{
        width:"95%",
        alignSelf:"center",
        padding:10,
        backgroundColor:colors.cardbackground,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor: colors.grey5,
        elevation:10,
        marginTop:10,
        shadowOffset:{width:10, height:10},
        shadowColor:colors.black,
        shadowOpacity:0.5,
        shadowRadius:1,
    },
})