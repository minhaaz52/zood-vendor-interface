import React from 'react'
import { View, Text, ScrollView } from "react-native"
import { useSelector } from 'react-redux'
import MenuItem from "../../components/MenuItem"
import { colors } from '../../global/styles'

function MainCourse(props) {

    const {list, id}=props
    // const itemCnt=useSelector(state=>state.menuCount.itemCnt);
    
    return (
        <View>
            { list.length!==0 &&
                <ScrollView>
                    {
                        list.map((val,index)=>{
                            let q=0
                            {/* itemCnt.map((it2)=>{
                                if (it2.item_id===val.item_id && it2.vendor_id===id){
                                    q=it2.count
                                }
                            }) */}
                            return(
                                <MenuItem item={val} id={id} quantity={q} key={index} cate="MainCourse"/>
                            )
                        })
                    }
                </ScrollView>
            }

            {list.length===0 &&
                <View style={{marginTop:10, padding:10, justifyContent:"flex-start"}}>
                    <Text style={{fontSize:20, color:colors.black, textAlign:"center"}}>No Results Found</Text>
                </View>
            }
        </View>
    )
}

export default MainCourse
