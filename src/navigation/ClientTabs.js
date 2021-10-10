import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import OrderFormScreen from '../screens/OrderFormScreen';
import OrdersDashboardScreen from '../screens/OrdersDashboardScreen'

const clientTabs=createBottomTabNavigator();

const RootClientTabs=()=>{
    return(
     <clientTabs.Navigator
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
           )
         }
         }
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
           )
         }
         }
         />
     </clientTabs.Navigator>
    );
}

export default RootClientTabs