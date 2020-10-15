
import React from "react";
import { Button, Text, View,AsyncStorage,TouchableOpacity,Image,ImageBackground,StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

export default class Record extends React.Component {
  constructor(props) {
    super(props);

this.state={
	isrecording: false,
	Perm: false,
}


}

start= async ()=> {
const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      Perm: response.status === 'granted',
    });

};


play = async ()=> {
const info = FileSystem.getInfoAsync(this.yo);
console.log(this.yo);

    //const soundObject = new Audio.Sound();
  //await soundObject.loadAsync(require());
  //await soundObject.playAsync();

}

on = async ()=> {

this.setState({
      isrecording: !this.state.isrecording,
    });

if(this.state.Perm && !this.state.isrecording ){
	const recording = new Audio.Recording();
  await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
  await recording.startAsync();
this.setState({
      isrecording: true,
    });
this.recording = recording;
}

if(this.state.Perm && this.state.isrecording){
await this.recording.stopAndUnloadAsync();
this.yo = this.recording.getURI();

}

}


  render() {

 var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 40, height: 40}} />
    </View>
  );

    return (

<View style={styles.container}>
    <View style= {{flex: 1,
flexDirection: 'row',
justifyContent: 'space-around',margin: 10,
  }}>
<ImageBackground source={require('./notes.jpg')} style={styles.image} />


<TouchableOpacity
activeOpacity={0.8} 
onPress={this.start}
 style={styles.appButtonContainer}>
   <Text >{this.yo}</Text>
 <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 40, height: 40,}} />

  </TouchableOpacity>


<TouchableOpacity
activeOpacity={0.1} 
onPress={this.play}
 style={styles.buto}>
 <ImageBackground source={require('./rec.png')} style={styles.image} />
    <Text style={styles.but_text}>play</Text>
  </TouchableOpacity>


      
<TouchableOpacity
activeOpacity={0.1} 
onPress={this.on}
 style={styles.buto}>
 <ImageBackground source={require('./rec.png')} style={styles.image} />
    <Text style={styles.but_text}>on</Text>
  </TouchableOpacity>



     </View>


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