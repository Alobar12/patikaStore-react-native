import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import ProductList from './components/ProductList';
import data from './data.json';

function App() {
  const product = ({item}) => <ProductList product={item}></ProductList>;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PatikaStore</Text>
      <TextInput placeholder="Ara"></TextInput>
      <FlatList
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        data={data}
        renderItem={product}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    fontSize: 30,
    color: '#aa4b6b',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
});
export default App;
