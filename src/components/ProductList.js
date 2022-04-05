import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import styles from './ProductList.styles';

function ProductList({product}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: product.imgURL}}></Image>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.inStock}>Stokta Yok</Text>}
      </View>
    </View>
  );
}

export default ProductList;
