import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const GeoLocationAPI = ({

                        }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLogitude] = useState(null);

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        setLatitude(latitude);
        setLogitude(longitude);
      },
      error => { console.log(error.code, error.message); },
      {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
    )
  }

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
      </MapView>
      {/*<Text> latitude: {latitude} </Text>*/}
      {/*<Text> longitude: {longitude} </Text>*/}
      {/*<TouchableOpacity onPress={() => geoLocation()}>*/}
      {/*  <Text> Get GeoLocation </Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex:1,
  },
})

export default GeoLocationAPI;


