import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert, CheckBox} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import { dataActions } from "../store/dataSlice";
import { NavigationContainer } from "@react-navigation/native";
import {colors} from "../global/styles"

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
    const [value, setValue] = useState("Starters");
    const [veg, setVeg]=useState(true);
    const [sInd, setSind]=useState("");
    const [dInd, setDind]=useState("");
    const [mInd, setMind]=useState("");

    const [sel1, setSel1]=useState(false);
    const [sel2, setSel2]=useState(false);
    const [sel3, setSel3]=useState(false);
    const [sel4, setSel4]=useState(false);
    const [sel5, setSel5]=useState(false);
    const [sel6, setSel6]=useState(false);
    const [sel7, setSel7]=useState(false);
    const [sel8, setSel8]=useState(false);

    // const categories={"sel1":"Fast Food", "sel2":"North Indian", "sel3":"South Indian", "sel4":"Chinese", "sel5":"Italian", "sel6":"Dessert", "sel7":"Thali","sel8":"Appetizers"}

    const cateArray=[{"name":sel1, "set":setSel1, "category":"Fast Food"}, {"name":sel2, "set":setSel2, "category":"North Indian"}, {"name":sel3, "set":setSel3, "category":"South Indian"}, {"name":sel4, "set":setSel4, "category":"Chinese"}, {"name":sel5, "set":setSel5, "category":"Italian"}, {"name":sel6, "set":setSel6, "category":"Dessert"}, {"name":sel7, "set":setSel7, "category":"Thali"}, {"name":sel8, "set":setSel8, "category":"Appetizers"}]

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

        let catArr=[]
        cateArray.map((val,index)=>{
            if (val.name===true){
                catArr.push(val.category);
            }
        })

        console.log("Cate Arr :",catArr);

        const newItem={itemId, name, veg:true, price, category:value, description, rating:0, numberOfRatings:0, available:true, bestSeller:false, tags:catArr}

        dispatch(dataActions.addData(newItem))

        Alert.alert('Item Added Successfully')
        setName('')
        setPrice()
        setValue("Starters")
        // setType()
        setDescription('')
        setVeg(true);
        cateArray.map((val,index)=>{
            val.set(false);
        })
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

            <View style={{marginLeft:5, marginVertical:10}}>

                <Text style={{fontWeight:"bold", fontSize:20, marginBottom:10}}>Tags :</Text>

                <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center"}}>
                    
                    {
                        cateArray.map((val,index)=>{
                            return(
                                <View key={index} style={{flexDirection:"row", alignItems:"center"}}>
                                    <CheckBox
                                        value={val.name}
                                        onValueChange={val.set}
                                    />
                                    <Text style={{marginHorizontal:5}}>{val.category}</Text>
                                </View>
                            )}
                        )
                    }
                </View>
            </View>
                        
            <TouchableOpacity
                // style={{borderWidth:1,borderColor:'black',width:'90%'}}
                style={{width:"50%",paddingVertical:5, backgroundColor:colors.statusBar, alignSelf:"center", borderRadius:24}}
                onPress={
                    submitHandler
                }
            >
                <Text style={{fontSize:20, color:"white", textAlign:"center"}}>
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