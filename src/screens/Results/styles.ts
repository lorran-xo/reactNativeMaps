import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  itemWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
  },
  itemContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2BC3DB',
  },
  priceContainer: {
    backgroundColor: '#E5E4E2',
    borderRadius: 5,
  },
  priceText: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  addressText: {
    fontSize: 13,
    fontWeight: '400',
  },
  divider: {
    width: '100%',
    marginTop: 15,
    height: 1,
    backgroundColor: '#E5E4E2',
  },
  scrollView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  scrollViewBottom: {
    paddingBottom: 100,
  },
  flatListPadding: {
    paddingRight: 16,
  },
  map: {
    width: '100%',
    height: '90%',
  },
});
