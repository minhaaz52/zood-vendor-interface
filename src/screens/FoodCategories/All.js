import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux';
import { View, Text, ScrollView } from "react-native";
import MenuItem from "../../components/MenuItem"
import { colors } from '../../global/styles';

function All(props) {

    const {list, id}=props
    const categories=["Starter","MainCourse","Dessert"]
    // const itemCnt=useSelector(state=>state.menuCount.itemCnt);
    // useEffect(()=>{
    //     // console.log(list)
    // },[])

    return (
        <View>
            {(list.Dessert.length!==0 || list.Starter.length!==0 || list["MainCourse"].length!==0) &&
                <ScrollView>
                    {
                        categories.map((val,index)=>{
                            return(
                                list[val].map((item,id2)=>{
                                    let q=0
                                    {/* itemCnt.map((it2,id3)=>{
                                        if (it2.item_id===item.item_id && it2.vendor_id===id){
                                            q=it2.count
                                        }
                                    }) */}
                                    return(
                                        <MenuItem key={id2} item={item} id={id} quantity={q} cate={val}/>
                                    )
                                })
                            )
                        })
                    }
                </ScrollView>
            }

            {list.Dessert.length===0 && list.Starter.length===0 && list["MainCourse"].length===0 &&
                <ScrollView style={{marginTop:10, padding:10}}>
                    <Text style={{fontSize:20, color:colors.black, textAlign:"center"}}>No Results Found</Text>
                </ScrollView>
            }
        </View>
    )
}

export default All
