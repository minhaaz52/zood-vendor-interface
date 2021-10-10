import React,{useState,useRef} from 'react'
import Header from '../components/Header'
import { View,Text,StyleSheet,Dimensions,TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {colors,parameters,title} from '../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'


const WelcomeScreen=({navigation})=>{
return(
    <View style={{flex:1,justifyContent:'space-evenly'}}>
    <View style={{justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>
     <Text style={{fontFamily:'nunito',fontSize:30,color:colors.buttons}}>Discover Restaurants</Text>
     <Text style={{fontFamily:'nunito',fontSize:30,color:colors.buttons}}>In Your Area</Text>
    </View>
    <View>
        <View style={{marginHorizontal:20,marginBottom:30}}>
      <Button
      title='Sign In'
      buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={()=>{
                navigation.navigate('LoginScreen')
          }}
       />
        </View>
        <View style={{marginHorizontal:20}}> 
      <Button 
          title='Create an Account'
          buttonStyle={styles.registerButton}
          titleStyle={styles.registerButtonTitle}
          onPress={()=>{
              navigation.navigate('SignUpScreen')
          }}
      />
        </View>
    </View>
    </View>
);
}


export default WelcomeScreen;


const styles=StyleSheet.create({
    registerButton:{
        fontFamily:'nunito',
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        borderColor:'#ff8c52',
        height:50,
        paddingHorizontal:20
    },
    registerButtonTitle:{
        fontFamily:'nunito',
        color:colors.grey1,
        fontSize:20,
        // fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    }
})