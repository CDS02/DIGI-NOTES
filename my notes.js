import React from "react";
import { Button, Text, View,AsyncStorage,TouchableOpacity,Image,ImageBackground,StyleSheet,ScrollView,Dimensions } from "react-native";
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

let width = Dimensions.get('window').width;
export default class Mynotes extends React.Component {
  constructor(props) {
    super(props);

this.state={
	isrecording: false,
	Perm: false,
}


}

render() {

 var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      
    </View>
  );

return (

<View style={{ flex:1, backgroundColor: 'transparent' }}>
        <View>
            <Image style={{ height: width, width: width, position: 'absolute', top:0, left:0 }} source={{ uri: 'http://i01.i.aliimg.com/wsphoto/v0/32297951629_5/5pcs-lot-The-Hollowan-Star-Nicolas-Cage-Stylish-Square-Pillowcase-Cushion-Pillow-Cover.jpg' }} />
        </View>
        <ScrollView style={{ flex:1 }}>
          <View>
            <Text>ipsum</Text>
          </View>
        </ScrollView>
      </View>

    	);

}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
    paddingVertical: 6,
  },
  
logo: {
 flex: 1,
  color: 'skyblue',
  fontWeight: 'bold',
    fontSize: 60,
    margin: 10,
    flexDirection: 'column',
  justifyContent: 'space-around',
},

but: {
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
},

foot :{
  flex: 0.5,
  backgroundColor: 'powderblue',
},

appButtonContainer :{
width: 70, height: 100,
  elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
},

 image: {
    position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.8,
  },
  backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },
    buto: {
      width: 110, height: 100, 
      elevation: 18,
    backgroundColor: "#28004d",
    borderRadius: 10,
    paddingVertical: 45,
    paddingHorizontal: 30,
    },

    but_text: {
      fontWeight: 'bold',
    fontSize: 15,
color: '#F0FFF0',
    }
});