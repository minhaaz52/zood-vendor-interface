import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { colors } from "../global/styles"

function EditWorkAddress() {

    const [wAdd1, setWAdd1]=useState("")
    const [wAdd2, setWAdd2]=useState("")
    const [wCity, setWCity]=useState("")
    const [wState, setWState]=useState("")
    const [wPin, setWPin]=useState("")
    const [wDistrict, setWDistrict]=useState("")
    const [wCountry, setWCountry]=useState("")
    const [wLandMark, setWLandMark]=useState("");

    return (
        <ScrollView>

            {/* <View style={styles.header}>
                <Text style={{fontSize:25, color:colors.cardbackground}}>Work Address</Text>
            </View> */}

            <View style={styles.text}>
                <Text style={styles.label}>Address Line 1 : </Text>
                <TextInput placeholder="Office Name, Office No..." style={styles.textInput2} value={wAdd1} onChangeText={(e)=>setWAdd1(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Address Line 2 : </Text>
                <TextInput placeholder="Street No, Area, Locality..." style={styles.textInput2} value={wAdd2} onChangeText={(e)=>setWAdd2(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>City : </Text>
                <TextInput placeholder="City" style={styles.textInput2} value={wCity} onChangeText={(e)=>setWCity(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>District : </Text>
                <TextInput placeholder="District" style={styles.textInput2} value={wDistrict} onChangeText={(e)=>setWDistrict(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>State : </Text>
                <TextInput placeholder="State" style={styles.textInput2} value={wState} onChangeText={(e)=>setWState(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Country : </Text>
                <TextInput placeholder="Country" style={styles.textInput2} value={wCountry} onChangeText={(e)=>setWCountry(e)}/>
            </View>
            
            <View style={styles.text}>
                <Text style={styles.label}>PIN Code : </Text>
                <TextInput placeholder="Area PIN Code" style={styles.textInput2} value={wPin} onChangeText={(e)=>setWPin(e)}/>
            </View>

            <View style={styles.text}>
                <Text style={styles.label}>Land Mark : </Text>
                <TextInput placeholder="Near" style={styles.textInput2} value={wLandMark} onChangeText={(e)=>setWLandMark(e)}/>
            </View>
        </ScrollView>
    )
}

export default EditWorkAddress

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
