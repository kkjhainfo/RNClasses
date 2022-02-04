import React from "react";
import { Text,View ,TouchableOpacity,SafeAreaView,ScrollView,StatusBar,StyleSheet, Dimensions} from "react-native";
import Style1 from "./css";
const MyApp=()=>
{
    const onClick=(p)=>{
        return alert('Hello  :' +p)
    }
    return(
    
    <SafeAreaView style={Mystyle.MainContainer,{height:Dimensions.get('window').height-25}}>
     <StatusBar  backgroundColor={'red'}></StatusBar>
     
     <View style={{height:40,backgroundColor:'#dddccc'}}>
        <Text>Top</Text>
     </View>
    <View style={Style1.container}>
    <TouchableOpacity onPress={()=>onClick('Welcome')} >
        <Text style={Style1.txtnew}>Text1</Text>
        <Text style={Style1.txts}>{'Text2'}</Text>
        <Text style={Mystyle.txtstyle}>{'Text3'}ddfdffdf</Text>
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


