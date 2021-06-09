import React, { useEffect, useState } from 'react';
import {View, Dimensions} from 'react-native';
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const ScreenHeight = Dimensions.get("window").height;
Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: "whenInUse"
});

const App = function() {
  const [coords, setCoords] = useState({latitude: 19.2619, longitude: -103.7228});

  useEffect(function() {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition((position) => {
      console.log(position);
      setCoords(position.coords);
    }, (error) => {
      console.error(error);
    }, {timeout: 15000, maximumAge: 0, enableHighAccuracy: false});
  }, []);

  return (
    <View>
      <MapView
        style={{height:ScreenHeight}}
        provider={PROVIDER_GOOGLE}
        mapType={MAP_TYPES.HYBRID}
        initialRegion={{
        latitude: 19.2619,
        longitude: -103.7228,
        latitudeDelta: 0.0021,
        longitudeDelta: 0
      }}
      onLongPress={ev => setCoords(ev.nativeEvent.coordinate)}>
        <Marker
          key={1}
          coordinate={coords}
          title="Laboratorio de Cómputo"
          descripción="Edificio donde están las salas de cómputo"
        />
      </MapView>
    </View>
  )
}

export default App;