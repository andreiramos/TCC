import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect,useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {

    const [origin,setOrigin]=useState(initialState : null);
    const [destination,setDestination]=useState(initialState : null);

    useEffect ( Effect(),{
      (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
          console.log(location);
        } else {
          throw new Error('Location permission not granted');
        }
      })();
    },inputs[]);

  return (
    
    <View style={styles.container}>
      <MapView 
        style={styles.mapa}
        initialRegion={{
        latitude: -31.33,
        longitude: -54.10,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
    >
      </MapView>

      <View style={styles.caixa}>

      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  mapa:{
    height: '60%',
    backgroundColor: 'black',
  },

  caixa:{
    height: '40%',
    backgroundColor: 'gray',
  },
});
