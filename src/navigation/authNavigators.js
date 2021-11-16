import React from 'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import OrdersDashboardScreen from '../screens/OrdersDashboardScreen'
import OrdersFormScreen from '../screens/OrderFormScreen'
import RootClientTabs from './ClientTabs'
import WelcomeScreen from '../screens/WelcomeScreen'
import { colors } from "../global/styles"
import EditAccount from '../screens/EditAccount'
import EditHomeAddress from '../screens/EditHomeAddress'
import EditWorkAddress from '../screens/EditWorkAddress'
import { withTheme } from 'react-native-elements'
import Login2 from '../screens/Login2'

const Auth=createStackNavigator()

const AuthStack=()=>{
    return(
        <Auth.Navigator
        // screenOptions={
        //     {
        //         fontFamily:'nunito',
        //     }
        // }
        >
<Auth.Screen 
    name='Login2'
    component={Login2}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>

<Auth.Screen 
    name='WelcomeScreen'
    component={WelcomeScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>

<Auth.Screen 
    name='SignUpScreen'
    component={SignUpScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>
<Auth.Screen 
    name='LoginScreen'
    component={LoginScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>
<Auth.Screen 
    name='OrdersFormScreen'
    component={OrdersFormScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>
<Auth.Screen 
    name='OrdersDashboardScreen'
    component={OrdersDashboardScreen}
    options={{
        // headerStyle:{
        //     backgroundColor:colors.statusBar,
        // },
        headerShown:false,
        // headerTitle:"OrdersDashboardScreen",
        ...TransitionPresets.RevealFromBottomAndroid
    }}   
/>

<Auth.Screen 
    name='RootClientTabs'
    component={RootClientTabs}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>

<Auth.Screen
    name="EditAccount"
    component={EditAccount}
    options={{
        headerStyle:{
            backgroundColor:colors.statusBar,
        },
        headerTitle:"Name",
        headerShown:true,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

<Auth.Screen
    name="EditHomeAdd"
    component={EditHomeAddress}
    options={{
        headerStyle:{
            backgroundColor:colors.statusBar,
            // color:"white",
        },
        headerTitle:"Home Address",
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

<Auth.Screen
    name="EditWorkAdd"
    component={EditWorkAddress}
    options={{
        headerStyle:{
            backgroundColor:colors.statusBar,
        },
        // headerTintColor:"white",
        headerTitle:"Work Address",
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

{/* <Auth.Screen 
    name='OTPScreen'
    component={OTPScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>

<Auth.Screen 
    name='RestaurantsMapScreen'
    component={RestaurantsMapScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>
<Auth.Screen 
    name='RestaurantHomeScreen'
    component={RestaurantHomeScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
    
/>

<Auth.Screen 
    name='RestaurantMenuScreen'
    component={RestaurantMenuScreen}    
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

<Auth.Screen 
    name='RestaurantGalleryScreen'
    component={RestaurantGalleryScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

<Auth.Screen 
    name='RestaurantInfoScreen'
    component={RestaurantInfoScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

 checkout
<Auth.Screen 
    name='CheckoutScreen'
    component={CheckoutScreen}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>

<Auth.Screen 
    name='DrawerNavigator'
    component={DrawerNavigator}
    options={{
        headerStyle:{
            fontFamily:'nunito',
        },
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/> */}
        </Auth.Navigator>
    )
}

export default AuthStack;