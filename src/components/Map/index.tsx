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
  onMapPress?: () => void;
}

export function Map({
  mapStyle,
  region,
  initialRegion,
  children,
  onMapPress,
}: Props) {
  return (
    <MapView
      style={mapStyle}
      onPress={onMapPress}
      initialRegion={initialRegion}
      region={region}>
      {children}
    </MapView>
  );
}
