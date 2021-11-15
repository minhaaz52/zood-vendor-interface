import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import {colors} from "../global/styles"

function EditAccount() {

    const [name,setName]=useState("Peggy Carter")

    return (
        <ScrollView>

            <View style={{height:100, width:100, borderRadius:100, backgroundColor:colors.statusBar, alignSelf:"center", marginTop:15, justifyContent:"center", alignItems:"center" }}>
                <Text style={{fontSize:50, color:colors.cardbackground}}>{name.substring(0,1).toUpperCase()}</Text>
            </View>

            <View style={styles.textInput}>
                <TextInput style={{ textAlign:"center", width:"100%", fontSize:20, }} placeholder="Name" value={name} onChangeText={(e)=>setName(e)}/>
            </View>

        </ScrollView>
    )
}

export default EditAccount

const styles=StyleSheet.create({
    textInput:{
        borderBottomWidth:1,
        borderColor: colors.grey3,
        paddingHorizontal:10,
        marginTop:15,
    },
})

