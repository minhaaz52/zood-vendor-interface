import React, {useState, useEffect} from "react";
import {View,Text,StyleSheet, ScrollView, TextInput, Switch, Dimensions, ActivityIndicator, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../global/styles"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from "react-native-elements";
import { dataActions } from "../store/dataSlice";

import All from "./FoodCategories/All"
import Starter from "./FoodCategories/Starter";
import Dessert from "./FoodCategories/Dessert";
import MainCourse from "./FoodCategories/MainCourse";


const oTab = createMaterialTopTabNavigator();


const OrdersDashboardScreen = ({navigation}) =>{


    const dispatch=useDispatch();

    // const id="1000001"

    const id=useSelector(state=>state.data.vendor_id)

    const menuItems=useSelector(state=>state.data.items);



    const [txt, setTxt]=useState("");
    const [toggle, setToggle]=useState(false);
    const [toggle2, setToggle2]=useState(false);
    const [loadAll, setLoadAll]=useState(true);
    const [load, setLoad]=useState(true);
    const [refresh, setRefresh]=useState(false);

    // const menuItems=useSelector(state=>state.data.items)

    // const [menuItems, setMenuItems]=useState({"Dessert":[], "Starters":[], "Main Course":[]})

    const [dessert, setDessert]=useState(menuItems.Dessert)
    const [starter, setStarter]=useState(menuItems.Starters)
    const [mainCourse, setMainCourse]=useState(menuItems["Main Course"])
    const [all, setAll]=useState({"Starters":starter, "Main Course":mainCourse, "Dessert":dessert})
    
    useEffect(()=>{
        let mount=true;
        if (mount){
            fetchingItem();
        }
        return ()=>mount=false;
        // navigation.addListener("focus", fetchingItem)
    },[])

    useEffect(()=>{
        let mount=true;
        if (mount){
            // setLoad(false);
            // setTimeout(()=>setLoad(false),1000)
            // console.log("All : ",all)
            setLoad(false);
        }
        return ()=>mount=false;
    },[all])

    const fetchingItem=()=>{
        // setLoad(true);
        fetch("http://192.168.1.6:8080/db/get-menus").then(data=>data.json()).then(data2=>{
            // console.log(data2)
            const result=data2.filter((val)=>val.vendor_id===id);
            if (result.length===0){
                return alert("Something Went Wrong");
            }
            // setMenuItems(result[0].menu_items.menu)
            dispatch(dataActions.updateData(result[0].menu_items.menu))
        }).catch(err=>console.log(err))
    }


    const onRefresh=()=>{
        // console.log("");
        setLoad(true);
        setRefresh(true);
        setLoad(false);
        fetchingItem();
        setTimeout(()=>setRefresh(false),100);
    }

    useEffect(()=>{
        // dispatch(dataActions.updateData(menuItems))
        setDessert(menuItems.Dessert);
        setStarter(menuItems.Starters)
        setMainCourse(menuItems["Main Course"]);
        
        // console.log(reduxItems);
        // setDessert(reduxItems.Dessert)
        // setStarter(reduxItems.Starters);
        // setMainCourse(reduxItems["Main Course"])
    },[menuItems])
    
    useEffect(()=>{
        setAll({"Starters":starter, "Main Course":mainCourse, "Dessert":dessert})
        // setLoad(false);
    },[dessert, starter, mainCourse])

    useEffect(()=>{
        searchResult();
    },[txt, toggle, toggle2])

    const searchResult=()=>{

        let filterDessert=menuItems.Dessert.filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));
        
        let filterStarter=menuItems.Starters.filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));

        let filterMainCourse=menuItems["Main Course"].filter(x=>x.name.toLowerCase().includes(txt.toLocaleLowerCase()));

        if ((toggle && toggle2) || (!toggle && !toggle2)){
            setDessert(filterDessert)
            setStarter(filterStarter)
            setMainCourse(filterMainCourse)
        }
        else if (toggle){
            let fd=filterDessert.filter(x=>x.veg===true);
            let fs=filterStarter.filter(x=>x.veg===true);
            let fm=filterMainCourse.filter(x=>x.veg===true);
            setDessert(fd)
            setStarter(fs)
            setMainCourse(fm)
        }
        else if (toggle2){
            let fd=filterDessert.filter(x=>x.veg===false);
            let fs=filterStarter.filter(x=>x.veg===false);
            let fm=filterMainCourse.filter(x=>x.veg===false);
            setDessert(fd)
            setStarter(fs)
            setMainCourse(fm)
        }
    }



    return(
        <View style={styles.container}>
        {/* {
                load===true &&
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <ActivityIndicator size="large" color={colors.loading}/>
                </View>
            }
            {load===false &&
        <View style={{flex:1}}> */}
            <View  style={[styles.header]}>
                <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>}>
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

            {load===false &&

            <oTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor:colors.statusBar,
                    tabBarInactiveTintColor:colors.black,
                    fontWeight:"bold",
                    tabBarStyle:{
                        backgroundColor:colors.cardbackground,
                    },

                    tabBarItemStyle:{
                        width:120,
                    },
                    tabBarIndicatorStyle:{backgroundColor:colors.statusBar},
                    tabBarScrollEnabled:true,
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
            }
            {
                load===true &&
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <ActivityIndicator size="large" color={colors.loading}/>
                </View>
            }
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