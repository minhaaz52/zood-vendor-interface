// import { rosybrown } from 'color-name';
import React from 'react'

import { View,Text,StyleSheet,Dimensions, } from 'react-native'
// import {colors,parameters} from '../global/styles'
import {Icon} from 'react-native-elements'
// import { NavigationContainer } from '@react-navigation/native';

const Header=({title,type,navigation})=>{
    return(
        <View style={styles.header}>
         <View style={{marginLeft:20}}>
             <Icon 
                 type='material-community'
                 name={type}
                 color='white'
                 size={28}
                 onPress={()=>{
                    navigation.goBack()
                 }}
             />
         </View>
         <View>
             <Text
             style={styles.headerText}
             >{title}</Text>
         </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'orange',
        height:40
    },
    headerText:{
        fontFamily:'nunito',
        color:'white',
        fontSize:22,
        // fontWeight:'bold',
        marginLeft:40
    }
})




export default Header