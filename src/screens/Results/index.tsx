import React, {useState} from 'react';
import {Marker, Callout} from 'react-native-maps';
import {Button, TouchableOpacity, View, Text, FlatList} from 'react-native';
import {Map} from '../../components/Map';
import {mockResponse} from '../../../mock';
import {styles} from './styles';

const region = {
  // Lisbon
  latitude: 38.734404,
  longitude: -9.1582873,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export function Results() {
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {!showMap ? (
        <>
          <View style={styles.pageHeader}>
            <View />
            <Text style={styles.headerText}>Rede Médica</Text>
            {/* Trocar por um ícone de mapa */}
            <Text style={styles.closeIcon} onPress={() => setShowMap(true)}>
              mapa
            </Text>
          </View>

          <FlatList
            data={mockResponse.clinics}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.code.toString()}
                onPress={() =>
                  console.log('Clicked on: ', item.latitude, item.longitude)
                }
                style={styles.itemWrapper}>
                <View style={styles.itemContainer}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.itemName}>
                    {item.name}
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.relevance}€</Text>
                  </View>
                </View>
                <Text style={styles.addressText}>
                  {item.address}, {item.city}
                </Text>
                <Text style={styles.addressText}>{item.postalCode}</Text>
                <View style={styles.divider} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.code.toString()}
            showsVerticalScrollIndicator={false}
            bounces={false}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.flatListPadding}
          />
        </>
      ) : (
        <>
          <View style={styles.pageHeader}>
            <View />
            <Text style={styles.headerText}>Rede Médica</Text>
            {/* Trocar por um ícone de fechar */}
            <Text style={styles.closeIcon} onPress={() => setShowMap(false)}>
              X
            </Text>
          </View>
          <Map mapStyle={styles.map} region={region} initialRegion={region}>
            {mockResponse.clinics.map((item: any, index: number) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}>
                <View style={styles.markerItem}>
                  <Text
                    style={
                      styles.markerText
                    }>{`${item.evaluation?.code}€`}</Text>
                </View>
                <View style={styles.arrow} />

                <Callout>
                  <View style={styles.popupContainer}>
                    <Text style={styles.popupTitle}>{item.name}</Text>

                    <Text style={styles.addressText}>
                      {item.address} {item.postalCode}, {item.city}
                    </Text>

                    <Text style={styles.itemName}>{item.phone}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </Map>
        </>
      )}
    </View>
  );
}
