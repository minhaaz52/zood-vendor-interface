import React,{useState,useRef} from 'react'
import Header from '../components/Header'
import { View,Text,StyleSheet,Dimensions,TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {colors,parameters,title} from '../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { dataActions } from '../store/dataSlice'

const Login2=({navigation})=>{

    const dispatch=useDispatch();

    const [textInput2Focussed,setTextInput2Focussed]=useState(false)
    const [textInput1Focussed,setTextInput1Focussed]=useState(false)
    const textInput1=useRef(1)
    const textInput2=useRef(2)

    const [vendorId, setVendorId]=useState("");

    const signin=()=>{
        // console.log(email);
        fetch("http://192.168.1.6:8080/db/vendor-list").then(data=>data.json()).then(data2=>{
            // console.log(data2);
            let result=data2.filter((val)=>val.vendor_id===vendorId);
            // console.log(result);
            if (result.length===0){
                return alert("Invalid Vendor Id");
            }
            dispatch(dataActions.updateVendor({"vendorId":result[0].vendor_id, "menuId":result[0].menu_id }))
            navigation.navigate("RootClientTabs")
        }).catch((err)=>console.log(err))
    }

    return(
        <View style={styles.container}>
                <Header title='MY ACCOUNT' type='arrow-left' navigation={navigation} />
                <View style={{marginHorizontal:20,marginVertical:10}}>
                    <Text 
                    style={title}
                    >
                        SignIn
                    </Text>
                </View>
                
                {/* <View style={{marginTop:20}}> */}
                    <View style={styles.textInput1}>
                        <Animatable.View animation={textInput1Focussed?"":"fadeInLeft"} duration={200}>
                            <Icon 
                                name='person'
                                iconStyle={{color:colors.grey3}}
                                type='material'
                            />
                        </Animatable.View>
                    
                        <TextInput 
                            style={{width:'80%'}}
                            placeholder='Vendor Id' 
                                ref={textInput1}
                                onFocus={()=>{
                                    setTextInput1Focussed(false)
                                }}
                                onBlur={()=>{
                                    setTextInput1Focussed(true)
                                }}
                            onChangeText={(e)=>setVendorId(e)}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={{marginHorizontal:20,marginTop:30}}>
                        <Button 
                            title='SIGN IN'
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}
                            onPress={()=>{
                                // navigation.navigate('RootClientTabs')
                                signin();
                            }}
                        />
                    </View>
                <View style={{alignItems:'center',marginTop:10}}>
                    <Text style={{...styles.text1,textDecorationLine:'underline'}}>Forgot Password?</Text>
                </View>
                <View style={{alignItems:'center',marginTop:30,marginBottom:30}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>OR</Text>
                </View>
                <View style={{marginHorizontal:10,marginTop:10}}>
                    <SocialIcon 
                        title='Sign In with FaceBook'
                        button
                        type='facebook'
                        style={styles.socialIcon}
                    />
                </View>
                <View style={{marginHorizontal:10,marginTop:10}}>
                    <SocialIcon 
                        title='Sign In with Google'
                        button
                        type='google'
                        style={styles.socialIcon}
                    />
                </View>
                <View style={{marginTop:15,marginLeft:20}}>
                    <Text style={{...styles.text1}}>New To Zood?</Text>
                </View>
                <View style={{alignItems:'flex-end',marginRight:20}}>
                    <Button
                        title='Create an Account'
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={()=>{
                            navigation.navigate('RegisterScreen')
                        }}
                        />
                </View>
        </View>
    );
}

export default Login2;


const styles=StyleSheet.create({
    container:{
        fontFamily:'nunito',
        flex:1
    },
    text1:{
        fontFamily:'nunito',
        color:colors.grey3,
        fontSize:16
    },
    textInput1:{
        fontFamily:'nunito',
        borderWidth:0,
        borderBottomWidth:1,
        borderColor:'#86939e',
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:15,
        height:40
    },
    textInput2:{
        fontFamily:'nunito',
        borderWidth:0,
        borderBottomWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:'#86939e',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
        paddingLeft:15,
        height:40
    },
    socialIcon:{
        fontFamily:'nunito',
        borderRadius:12,
        height:50
    },
    createButton:{
        fontFamily:'nunito',
      backgroundColor:'white',
      alignContent:'center',
      justifyContent:'center',
      borderRadius:12,
      borderWidth:1,
      borderColor:'#ff8c52',
      height:40,
      paddingHorizontal:20
    },
    createButtonTitle:{
        fontFamily:'nunito',
       color:'#ff8c52',
       fontSize:16,
    //    fontWeight:'bold',
       alignItems:'center',
       justifyContent:'center',
       marginTop:-3
    }
})