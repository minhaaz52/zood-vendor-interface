import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import { dataActions } from "../store/dataSlice";
const OrderFormScreen = (props) =>{

dispatch=useDispatch()


    const [name,setName]=useState('')
    const [type,setType]=useState('')
    const [price,setPrice]=useState()
    const [description,setDescription]=useState('')


    const data = [
        {
          label: 'Veg'
         },
         {
          label: 'Non-Veg'
         }
        ];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Starters', value: 'starters'},
      {label: 'Desserts', value: 'desserts'},
      {label: 'Main Course', value: 'main course'},
    ]);



    const submitHandler=()=>{
        const newItem={
            name,
            type,
            price,
            category:value,
            description,
            rating:0,
            numberOfRatings:0
        }
         dispatch(dataActions.addData(newItem))
        Alert.alert('Item Added Successfully')
        setName('')
        setPrice()
        setValue(null)
        setType()
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
                         setType(e.label) 
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