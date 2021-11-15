import React from 'react'
import Header from '../components/Header';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'

const MyAccountScreen=({navigation})=>{
    return(
<View style={{flex:1}}>
{/* <Header title='SETTINGS' type='arrow-left' navigation={navigation} /> */}
<View style={styles.infoBox}>
    <View>
     <View style={styles.letterView}>
         <Text style={{fontSize:40,color:colors.cardbackground}} >
          P
         </Text>
     </View>
    </View>
    <Text style={styles.infoBoxName}>Pappy Bukasa</Text>
    <TouchableOpacity style={{fontSize:22}}>
        <Text style={styles.infoBoxButton} onPress={()=>navigation.navigate("EditAccount")}>EDIT ACCOUNT</Text>
    </TouchableOpacity>
</View>


{/* -----------//////////-----------------////////////////////////// */}



<View style={styles.addressView}>
    <Text style={{paddingLeft:15,marginTop:5,fontSize:20,color:colors.grey2}}>Saved Places</Text>
    <View>
        <View style={{marginTop:25}}>
            <View style={styles.addressBox}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Icon 
                       name='home-outline'
                       iconStyle={{color:colors.grey3}}
                       type='material-community'
                   />
                  <Text style={{fontSize:20,marginLeft:5,color:colors.grey1}}>Home Address</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("EditHomeAdd")}>
                <Text style={{color:colors.grey3,textDecorationLine:'underline'}}>EDIT</Text>
            </TouchableOpacity>
            </View>
            <Text style={{marginLeft:25,color:colors.grey3}}>22 Bessie Street parksville ,452003</Text>
        </View>
        <View style={{marginTop:40}}>
            <View style={styles.addressBox}>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Icon 
                       name='briefcase-outline'
                       iconStyle={{color:colors.grey3}}
                       type='material-community'
                   />
                  <Text style={{fontSize:20,marginLeft:5,color:colors.grey1}}>Work Address</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("EditWorkAdd")}>
                <Text style={{color:colors.grey3,textDecorationLine:'underline'}}>EDIT</Text>
            </TouchableOpacity>
            </View>
            <Text style={{marginLeft:25,color:colors.grey3}}>22 Bessie Street parksville ,452003</Text>
        </View>
    </View>
</View>

{/* ---------------------////////////////////-------------- */}


<View>
<View style={styles.otherBox}>
            <Icon 
                       name='history'
                       iconStyle={{color:colors.grey3}}
                       type='material-community'
                   />
                  <Text style={{fontSize:20,marginLeft:5,color:colors.grey1}}>Order History</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:15,marginVertical:20}}>
            <Icon 
                       name='ticket-percent-outline'
                       iconStyle={{color:colors.grey3}}
                       type='material-community'
                   />
                  <Text style={{fontSize:20,marginLeft:5,color:colors.grey1}}>Restaurant Rewards</Text>
            </View>
</View>


{/* -----------------///////////////----------------////////////////////------------------------- */}

<View style={{marginTop:30}}>
    {/* <Text> Other Options</Text> */}
    <Text style={{paddingLeft:15,marginTop:5,fontSize:20,color:colors.grey2}}>Other Options</Text>
    <View style={styles.signOutView}>
            <Icon 
                       name='logout-variant'
                       iconStyle={{color:colors.grey3}}
                       type='material-community'
                   />
                  <Text style={{fontSize:20,marginLeft:5,color:'green'}}>Sign Out</Text>
            </View>
</View>
</View>
    ); 
}

export default MyAccountScreen;

const styles=StyleSheet.create({
    infoBox:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor: colors.grey4
    },
    letterView:{
        height:80,
        width:80,
        borderRadius:50,
        borderColor:colors.grey4,
        borderWidth:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.buttons
    },
    infoBoxName:{
        fontFamily:'nunito',
        fontSize:16,
        marginVertical:5,
        color:colors.grey2
    },
    infoBoxButton:{
        fontFamily:'nunito',
        fontSize:18,
        color:colors.green,
        marginTop:5,
        marginBottom:5
    },
    addressView:{
        borderBottomWidth:1,
        borderBottomColor:colors.grey4,
        paddingTop:10,
        paddingBottom:25
    },
    addressBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    otherBox:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:15,
        marginVertical:20
    },
    signOutView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:15,
        marginVertical:20
    }


})