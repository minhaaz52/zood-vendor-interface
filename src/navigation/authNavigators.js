import React from 'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import OrdersDashboardScreen from '../screens/OrdersDashboardScreen'
import OrdersFormScreen from '../screens/OrderFormScreen'
import RootClientTabs from './ClientTabs'
import WelcomeScreen from '../screens/WelcomeScreen'

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
        headerShown:false,
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