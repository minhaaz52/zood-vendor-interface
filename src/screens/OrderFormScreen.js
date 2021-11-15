import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert, CheckBox} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import { dataActions } from "../store/dataSlice";
import { NavigationContainer } from "@react-navigation/native";

const OrderFormScreen = ({navigation}) =>{

    const dispatch=useDispatch()
    const menuItems=useSelector(state=>state.data.items);

    const vendor_id=useSelector(state=>state.data.vendor_id);

    const [name,setName]=useState('')
    const [type,setType]=useState('')
    const [price,setPrice]=useState()
    const [description,setDescription]=useState('')

    const data = [ { label: 'Veg' }, { label: 'Non-Veg' } ];

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [veg, setVeg]=useState(true);
    const [sInd, setSind]=useState("");
    const [dInd, setDind]=useState("");
    const [mInd, setMind]=useState("");

    const [flag, setFlag]=useState(false);
    
    const [items, setItems] = useState([
      {label: 'Starter', value: 'Starters'},
      {label: 'Dessert', value: 'Dessert'},
      {label: 'Main Course', value: 'Main Course'},
    ]);

    useEffect(()=>{
        setIndex();
    },[menuItems])

    const setIndex=()=>{
        let desInd=1001
        let statInd=1001
        let mainInd=1001
        
        while (true){
            let v=true;
            menuItems.Dessert.map((val,index)=>{
                if (Number(val.item_id.slice(3))===desInd){
                    v=false;
                    desInd+=1
                }
            })

            if (v){
                let b="APR"+desInd.toString();
                desInd=b;
                setDind(b)
                break;
            }
        }

        while (true){
            let v=true;
            menuItems.Starters.map((val,index)=>{
                if (Number(val.item_id.slice(3))===statInd){
                    v=false;
                    statInd+=1
                }
            })

            if (v){
                let b="APP"+statInd.toString();
                statInd=b;
                setSind(b);
                break;
            }
        }

        while (true){
            let v=true;
            menuItems["Main Course"].map((val,index)=>{
                if (Number(val.item_id.slice(3))===mainInd){
                    v=false;
                    mainInd+=1
                }
            })

            if (v){
                let b="APQ"+mainInd.toString();
                mainInd=b;
                setMind(b);
                break;
            }
        }

    }

    useEffect(()=>{
        // console.log(veg);
    },[veg])


    const vegFun=(e)=>{
        if (e.label==="Veg"){
            setVeg(true)
        }
        else{
            setVeg(false);
        }
    }


    const submitHandler=()=>{
        let itemId=""
        if (value==="Starters"){
            itemId=sInd
        }
        else if (value==="Main Course"){
            itemId=mInd
        }
        else if (value==="Dessert"){
            itemId=dInd
        }

        const newItem={itemId, name, veg:true, price, category:value, description, rating:0, numberOfRatings:0, available:true, bestSeller:false, tags:["North Indian", "Fast Food"]}

        dispatch(dataActions.addData(newItem))

        Alert.alert('Item Added Successfully')
        setName('')
        setPrice()
        setValue(null)
        // setType()
        setDescription('')
    }
 
    return(
        <View style={styles.container}>
            <TextInput
                placeholder='Name'
                style={styles.textInput1}
                value={name}
                onChangeText={(e)=>{
                    setName(e)
                }}
                onFocus={()=>{
                }}
                onBlur={()=>{
                }}
            />
            
            <RadioButtonRN
                style={{paddingHorizontal:20,alignItems:'flex-start',flexDirection:'column'}}
                data={data}
                box={false}

                selectedBtn={(e) => {
                    // setType(e.label)
                    vegFun(e)
                }}
            />

            <TextInput
                placeholder='Price'
                style={styles.textInput1}
                value={price}
                onChangeText={(e)=>{
                    setPrice(e)
                }}
                keyboardType='number-pad'
                onFocus={()=>{
                }}
                onBlur={()=>{
                }}
            />
            
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />

            <TextInput
                placeholder='Description(optional)'
                style={styles.textInput1}
                value={description}
                onChangeText={(e)=>{
                    setDescription(e)
                }}
                onFocus={()=>{
                }}
                onBlur={()=>{
                }}
            />
                        
            <TouchableOpacity
                style={{borderWidth:1,borderColor:'black',width:'90%'}}
                onPress={
                    submitHandler
                }
            >
            
                <Text>
                    Add Menu Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}


export default OrderFormScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
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
})