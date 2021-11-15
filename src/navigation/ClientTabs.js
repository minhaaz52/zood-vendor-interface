import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import OrderFormScreen from '../screens/OrderFormScreen';
import OrdersDashboardScreen from '../screens/OrdersDashboardScreen'
import { colors } from "../global/styles"
import Profile from '../screens/Profile';

const clientTabs=createBottomTabNavigator();

const RootClientTabs=()=>{
    return(
     <clientTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor:colors.statusBar,
            tabBarInactiveTintColor:colors.gray,
        }}
     >
        <clientTabs.Screen
            name='OrdersDashboardScreen'
            component={OrdersDashboardScreen}
            options={{
                tabBarLabel:'Menu',
                tabBarIcon:({color,size})=>(
                    <Icon 
                        name='home'
                        type='material'
                        color={color}
                        size={size}
                    />
                ),
                tabBarActiveTintColor:colors.statusBar,
                headerStyle:{
                    backgroundColor:colors.statusBar,
                },
                headerTitle:"Zood",
                headerTintColor:"white",
                // headerShown:false,
            }}
        />


                  <clientTabs.Screen
         name='OrderFormScreen'
         component={OrderFormScreen}
         options={{
           tabBarLabel:'Add Menu Item',
           tabBarIcon:({color,size})=>(
               <Icon 
                   name='view-list'
                   type='material'
                   color={color}
                   size={size}
               />
           ),
            tabBarActiveTintColor:colors.statusBar,
            headerStyle:{
                backgroundColor:colors.statusBar,
            },
            headerTitle:"Zood",
            headerTintColor:"white",
         }
         }
         />

         <clientTabs.Screen
             name="Profile"
             component={Profile}
             options={{
                 tabBarLabel:"Profile",
                 tabBarIcon:({color, size})=>(
                    <Icon
                     name="person"
                     color={color}
                     size={size}
                    />
                 ),
                
                tabBarActiveTintColor:colors.statusBar,
                headerStyle:{
                    backgroundColor:colors.statusBar,
                },
                headerTintColor:"white",
                headerTitle:"Zood",
             }}
         />
     </clientTabs.Navigator>
    );
}

export default RootClientTabs