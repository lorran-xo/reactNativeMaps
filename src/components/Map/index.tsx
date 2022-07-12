import React from 'react';
import MapView from 'react-native-maps';

interface regionType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Props {
  mapStyle: any;
  region?: regionType;
  initialRegion?: regionType;
  children: any;
}

export function Map({mapStyle, region, initialRegion, children}: Props) {
  return (
    <MapView style={mapStyle} initialRegion={initialRegion} region={region}>
      {children}
    </MapView>
  );
}
