import { StyleSheet,Dimensions} from "react-native";

const {h,w}=Dimensions.get('screen');
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;

const Style1=StyleSheet.create({
    container:{backgroundColor:'teal',justifyContent:'center',},
    txtnew:{fontSize:22,color:'red',backgroundColor:'grey'},
    txts:{color:'green',fontSize:28}
})

export default Style1;