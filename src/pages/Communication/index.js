import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Text>Communication</Text>
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
      <Cart quantitiy={totalProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
