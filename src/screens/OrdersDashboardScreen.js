import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { useSelector } from "react-redux";


const OrdersDashboardScreen = (props) =>{
    
    const menuItems=useSelector(state=>state.data.items)
    console.log(menuItems)
    return(
<View style={styles.container}>

    { Object.keys(menuItems).length!==0 ? 
         Object.keys(menuItems).map((val)=>{
            return(
                <View>
                <Text>{val}</Text>
                    {
                        menuItems[val].map((valu)=>{
                            return(
                                <View>
                                <Text>{valu.name}</Text>
                                <Text>{valu.type}</Text>
                                <Text>{valu.price}</Text>
                                </View>
                                
                            );
                        })
                    }
                </View>
            );
        }) : <Text>no items yet</Text>
    }


</View>
    );
}


export default OrdersDashboardScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})