import React from 'react'
import {StyleSheet, View, Text} from "react-native"
import {Icon} from "react-native-elements";
import { colors } from "../global/styles"


const Star=(props)=>{
    
    const {rating, review}=props

    let arr=[]
    for (var i=1; i<=5; i++){
        let name="star"
        if (i>rating){
            name="star-border"
        }
        arr.push((<Icon type="octicons"  name={name} color={colors.star} key={i} size={20}/>))
    }
    return(
        <View style={styles.container}>
            {arr}
            <Text style={styles.text}>{review}</Text>
        </View>
    )
}

export default Star

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
    },

    text:{
        fontSize:13,
        marginLeft:5,
        color:colors.black,
    }
})
