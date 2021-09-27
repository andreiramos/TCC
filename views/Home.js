import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {css} from '../assets/css/Css.js'
import MapView from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from 'react-native-maps-directions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(props) {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      } else {
        throw new Error("Location permission not granted");
      }
    })();
  }, []);

  
  return (
    <View style={css.container}>
      <MapView
        style={css.mapa}
        initialRegion={origin}
          showsUserLocation={true}
          loadingEnabled={true}       
      ></MapView>

      <View style={css.caixa}>
      <Button title='ir para login' onPress={()=>props.navigation.navigate('Login')}/>
      </View>
    </View>
  );
}

