import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, { MAP_TYPES, PROVIDER_GOOGLE } from 'react-native-maps';

const ScreenHeight = Dimensions.get("window").height;

const App = function() {
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
      }} />
    </View>
  )
}

export default App;