/*
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{
        padding: "1rem",
        flexBasis: "500px",
        height: "100%",
        overflow: "auto",
      }}>
        {mockResponse.clinics.map((item: any, index: number) => (
          <div
            key={index.toString()}
            onClick={() => console.log("Clicked on: ", item.latitude, item.longitude)}
            style={{cursor: 'pointer', flexDirection: 'row', marginBottom: 20}}
          >
            <div style={{flexDirection: 'row', alignItems: 'center'}}>
              <span style={{color: '#2BC3DB', fontWeight: 'bold'}}>{item.name}</span>
              <div style={{backgroundColor: '#B2BEB5', borderRadius: 5, width: '5%'}}>
                <span style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>{item.relevance}€</span>
              </div>
            </div>
            <span style={{fontSize: 13}}>{item.address}, {item.city}</span><br />
            <span style={{fontSize: 13}}>{item.postalCode}</span>
            <div style={{width: '90%', marginTop: '10px', height: '1px', backgroundColor: '#D3D3D3'}} />
          </div>
        ))}
      </div>
    </div>
*/

import React from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';

import {mockResponse} from '../../../mock';
import {styles} from './styles';

export function Results() {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewBottom}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {mockResponse.clinics.map((item: any, index: number) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() =>
              console.log('Clicked on: ', item.latitude, item.longitude)
            }
            style={styles.container}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
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
        ))}
      </ScrollView>
    </View>
  );
}
