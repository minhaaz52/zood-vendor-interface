import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import {colors} from "../global/styles"

function EditHomeAddress() {
    
    const [hAdd1, setHAdd1]=useState("")
    const [hAdd2, setHAdd2]=useState("")
    const [hCity, setHCity]=useState("")
    const [hState, setHState]=useState("")
    const [hPin, setHPin]=useState("")
    const [hDistrict, setHDistrict]=useState("")
    const [hCountry, setHCountry]=useState("")
    const [hLandMark, setHLandMark]=useState("");

    return (
        <ScrollView>
            {/* <View style={styles.header}>
                <Text style={{fontSize:25, color:colors.cardbackground}}>Home Address</Text>
            </View> */}

            <View style={styles.text}>
                <Text style={styles.label}>Address Line 1 : </Text>
                <TextInput placeholder="House No, Flat No, Hostel Name..." style={styles.textInput2} value={hAdd1} onChangeText={(e)=>setHAdd1(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Address Line 2 : </Text>
                <TextInput placeholder="Street No, Area, Locality..." style={styles.textInput2} value={hAdd2} onChangeText={(e)=>setHAdd2(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>City : </Text>
                <TextInput placeholder="City" style={styles.textInput2} value={hCity} onChangeText={(e)=>setHCity(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>District : </Text>
                <TextInput placeholder="District" style={styles.textInput2} value={hDistrict} onChangeText={(e)=>setHDistrict(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>State : </Text>
                <TextInput placeholder="State" style={styles.textInput2} value={hState} onChangeText={(e)=>setHState(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Country : </Text>
                <TextInput placeholder="Country" style={styles.textInput2} value={hCountry} onChangeText={(e)=>setHCountry(e)}/>
            </View>
            
            <View style={styles.text}>
                <Text style={styles.label}>PIN Code : </Text>
                <TextInput placeholder="Area PIN Code" style={styles.textInput2} value={hPin} onChangeText={(e)=>setHPin(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Land Mark : </Text>
                <TextInput placeholder="Near" style={styles.textInput2} value={hLandMark} onChangeText={(e)=>setHLandMark(e)}/>
            </View>

        </ScrollView>
    )
}

export default EditHomeAddress

const styles=StyleSheet.create({
    textInput2:{
        borderBottomWidth:1,
        borderColor:colors.grey3,
        marginLeft:5,
        width:"100%",
    },

    header:{
        marginTop:20,
        backgroundColor:colors.statusBar,
        paddingVertical:5,
        justifyContent:"center",
        alignItems:"center",
    },

    label:{
        marginTop:5,
        fontWeight:"bold"
    },

    text:{
        flexDirection:"row", 
        marginTop:10, 
        paddingHorizontal:10, 
        // marginHorizontal:10,
        paddingVertical:5,
    },
})
