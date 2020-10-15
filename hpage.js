import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from  './but_draw'
import Menu from  './menu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image,ImageBackground,StyleSheet, Button, View, SafeAreaView, Text, Alert,TouchableOpacity} from 'react-native';

export default function Hpage({navigation}) {
  return (
    <View style={styles.container}>
<View style= {{flex: 0.1,
flexDirection: 'row',
justifyContent: 'space-around',
  }}>

<ImageBackground source={require('./too.jpg')} style={styles.image} />
  </View>

    <View style= {{flex: 1,
flexDirection: 'row',
justifyContent: 'space-around',margin: 10,

  }}>
<ImageBackground source={require('./notes.jpg')} style={styles.image} />


      <Text style={styles.logo}>Notes</Text>
     </View>

<View style={styles.but}>
<ImageBackground source={require('./bg.jpg')} style={styles.image} />
  
    <View style= {{flex: 1,
flexDirection: 'row',
justifyContent: 'space-around',margin: 10,
  }}>
      <TouchableOpacity
activeOpacity={0.1} 
onPress={() => navigation.navigate('Profile')}
 style={styles.buto}>
 <ImageBackground source={require('./rec.png')} style={styles.image} />
    <Text style={styles.but_text}>Record</Text>
  </TouchableOpacity>


         <TouchableOpacity
activeOpacity={0.1} 
onPress={() => navigation.navigate('Page')}
 style={styles.buto}>
 <ImageBackground source={require('./not.png')} style={styles.image} />
    <Text style={styles.but_text}>My Notes</Text>
  </TouchableOpacity>
</View>

    <View style= {{flex: 1,
flexDirection: 'row',
justifyContent: 'space-around',margin: 10,
  }}>
  <TouchableOpacity
activeOpacity={0.1} 
onPress={() => Alert.alert('Right button pressed')}
 style={styles.buto}>
 <ImageBackground source={require('./wri.jpg')} style={styles.image} />
    <Text style={styles.but_text}>Write</Text>
  </TouchableOpacity>
  

  <TouchableOpacity
activeOpacity={0.1} 
onPress={() => Alert.alert('Right button pressed')}
 style={styles.buto}>
 <ImageBackground source={require('./photo.jpg')} style={styles.image} />
    <Text style={styles.but_text}>Photo</Text>
  </TouchableOpacity>
</View>
</View>

<View style={styles.foot} >
<Home />

</View>
      <StatusBar style="auto" />

    </View>
  );
}

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
    margin: 5,
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
