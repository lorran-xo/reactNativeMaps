import React, {useState} from 'react';
import {Marker, Callout} from 'react-native-maps';
import {View, Text} from 'react-native';

import {Map} from '../../components/Map';
import {mockResponse} from '../../../mock';
import Phone from '../../assets/phone.svg';
import CloseIcon from '../../assets/close.svg';

import {styles} from './styles';


export function Results() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>();
  const [focusedRegion, setFocusedRegion] = useState({
    latitude: 38.734404,
    longitude: -9.1582873,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  function handlePressMarker(item: any, index: number) {
    setSelectedMarker(index);
    setFocusedRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View />
        <Text style={styles.headerText}>Rede Médica</Text>

        <Text style={styles.closeIcon} onPress={() => ({})}>
          <CloseIcon width={30} height={30} fill="#FFFFFF" />
        </Text>
      </View>

      <Map
        onMapPress={() => setSelectedMarker(null)}
        mapStyle={styles.map}
        region={focusedRegion}
        initialRegion={focusedRegion}>
        {mockResponse.clinics.map((item: any, index: number) => (
          <Marker
            onPress={() => handlePressMarker(item, index)}
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}>
            <View
              style={{
                marginTop: 7,
                borderRadius: 7,
                borderWidth: 3,
                backgroundColor:
                  selectedMarker === index ? '#000000' : '#FFFFFF',
              }}>
              <Text
                style={{
                  margin: 6,
                  fontWeight: 'bold',
                  color: selectedMarker === index ? '#FFFFFF' : '#000000',
                }}>
                {item?.evaluation?.code
                  ? `${item?.evaluation?.code
                      .toFixed(2)
                      .replace(/\.00$/, '')} €`
                  : ' - '}
              </Text>
            </View>
            <View style={styles.markerArrow} />

            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.popupTitle}>{item.name}</Text>

                  <Text style={styles.addressText}>
                    {item.address} {item.postalCode}, {item.city}
                  </Text>

                  <View style={styles.phoneContainer}>
                    <View>
                      <Phone width={20} height={20} fill="#00B1D1" />
                    </View>

                    <Text style={styles.phoneText}>{item.phone}</Text>
                  </View>
                </View>
                <View style={styles.calloutArrow} />
              </View>
            </Callout>
          </Marker>
        ))}
      </Map>
    </View>
  );
}
