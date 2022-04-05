import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 6,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    borderStyle: 'dotted',
    borderColor: 'red',
    position: 'relative',
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    height: Dimensions.get('window').height / 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inStock: {
    fontSize: 23,
    color: 'red',
    fontWeight: 'bold',
  },
});
