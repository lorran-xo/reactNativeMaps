import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00B1D1',
    height: '8%',
  },
  headerText: {
    fontSize: 20,
    left: 20,
    color: '#FFFFFF',
  },
  closeIcon: {
    fontSize: 20,
    right: 10,
    color: '#FFFFFF',
  },
  addressText: {
    fontSize: 13,
    fontWeight: '400',
  },
  map: {
    width: '100%',
    height: '92%',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 2,
  },
  phoneText: {
    fontSize: 14,
    marginLeft: 7,
    fontWeight: 'bold',
    color: '#2BC3DB',
  },
  popupTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2BC3DB',
  },
  markerArrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderRightWidth: 8,
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderTopColor: 'black',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    alignSelf: 'center',
    bottom: 1,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 13,
    width: 150,
  },
  calloutArrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  }
});
