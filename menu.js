import * as React from 'react';
import { Text, View, StyleSheet, DrawerLayoutAndroid } from 'react-native';

export default class Menu extends React.Component {
  render() {
     var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left} 
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
      </View>
    </DrawerLayoutAndroid>
  );
 }
}

