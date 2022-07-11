import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    color: '#2BC3DB',
  },
  priceContainer: {
    backgroundColor: '#B2BEB5',
    borderRadius: 5,
    width: '5%',
  },
  priceText: {
    fontSize: 12,
    color: 'black',
  },
  addressText: {
    fontSize: 13,
  },
  divider: {
    width: '90%',
    marginTop: '10px',
    height: '1px',
    backgroundColor: '#D3D3D3',
  },
  scrollView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  scrollViewBottom: {
    paddingBottom: 100,
  },
});
