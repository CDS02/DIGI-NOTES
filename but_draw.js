import * as React from 'react';
import { ImageBackground,Text, View, StyleSheet, DrawerLayoutAndroid,Image,TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
     var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff',flexDirection: 'row',
  }}>
      
      

       <TouchableOpacity
activeOpacity={0.1} 
onPress={() => navigation.navigate('Profile')}
 style={styles.buto}>
 <ImageBackground source={require('./share.jpg')} style={styles.image} />
    <Text style={styles.but_text}>Share</Text>
  </TouchableOpacity>

<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 40, height: 40}} />

    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left} 
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground source={require('./pro.jpg')} style={{ position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        }} />
        <Text style={{margin: 6, fontSize: 30,color: 'white', textAlign: 'right'}}>Profile</Text>
        <Text style={{fontSize: 15,color: 'white', textAlign: 'right'}}>Swipe Right</Text>
        
      </View>
    </DrawerLayoutAndroid>
  );
 }
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
      flex: 0.3, 
      elevation: 18,
    backgroundColor: "#28004d",
    paddingVertical: 45,
    paddingHorizontal: 30,
    },

    but_text: {
      fontWeight: 'bold',
    fontSize: 15,
color: '#F0FFF0',
    }
});
