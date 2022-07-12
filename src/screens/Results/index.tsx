import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Button, TouchableOpacity, View, Text, FlatList} from 'react-native';

import {mockResponse} from '../../../mock';
import {styles} from './styles';

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export function Results() {
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => (!showMap ? setShowMap(true) : setShowMap(false))}
        title={!showMap ? 'Ver mapa' : 'Ver resultados'}
        color="#B58B00"
      />
      {!showMap ? (
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
      ) : (
        <MapView
          style={styles.map}
          // initialRegion={region}
          region={region}>
          {mockResponse.clinics.map((item: any, index: number) => (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
              title={item.city}
              description={item.name}
              // image={{
              //   uri: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
              // }}
            />
          ))}
        </MapView>
      )}
    </View>
  );
}
