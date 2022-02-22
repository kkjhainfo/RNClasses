import React, { useMemo, useState } from "react";
import {Modal, Alert,Text,View ,TouchableOpacity,SafeAreaView,ScrollView,StatusBar,StyleSheet, Dimensions} from "react-native";
import Style1 from "./css";

const {height,width}=Dimensions.get('screen');
const MyApp=()=>
{
    const [visible,setIsVisible]=useState(false)
    const onClick=(p)=>{
        return Alert.alert("Information",'Hello  :' +p,[{text:"Ok",onPress:()=>{()=>{setIsVisible(true)}}},{text:"Cancel",style:'cancel'}],'login-password')
    }
const AlertModel=()=>
{
  return  <Modal visible={visible} transparent={true} style={{toPrecision:(14),position:'absolute'}}>
        <View style={{height:150,width:width, backgroundColor:'green',position:'relative' ,marginTop:height-height*65/100,borderTopEndRadius:20,borderTopStartRadius:20}}>
            <Text style={{fontSize:18,paddingLeft:20,color:'#cccfff'}}>Welcome: Modal PopUp</Text>
            <TouchableOpacity onPress={()=>{setIsVisible(false)}} style={{backgroundColor:'#cccfff',alignItems:'flex-end' ,margin:2}}>
                <Text style={{fontSize:18,paddingLeft:20,paddingRight:10}}>X</Text>
            </TouchableOpacity>
        </View>
    </Modal>
}

    return(
   
    <SafeAreaView style={Mystyle.MainContainer,{height:Dimensions.get('window').height-25}}>
         <AlertModel visible={visible}/>
     <StatusBar  backgroundColor={'red'}></StatusBar>
     
     <View style={{height:40,backgroundColor:'#dddccc'}}>
        <Text>Top</Text>
     </View>
    <View style={Style1.container}>
    <TouchableOpacity onPress={()=>setIsVisible(true)} >
        <Text style={Style1.txtnew}>Text1</Text>
        <Text style={Style1.txts}>{'Text2'}</Text>
        <Text style={Mystyle.txtstyle}>{'Text3'} Additional Text</Text>
    </TouchableOpacity>

    </View>
    <View style={{position:'absolute' ,height:40,backgroundColor:'#dddfff',bottom:0,flexDirection:'row',justifyContent:'space-between',width:Dimensions.get('screen').width}}>
        <Text>Bottom</Text>
    </View>
    
    </SafeAreaView>
     )

}

const Mystyle=StyleSheet.create({
        txtstyle:{fontSize:22,color:'red',backgroundColor:'transparent'},
        txt1:{color:'green',fontSize:28},
        MainContainer: {
            flex: 1,
            margin: 2,  
            backgroundColor:'#fff'
        },
})

export default MyApp;


