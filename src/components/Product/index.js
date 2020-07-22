import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const index = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardwrapper}>
        <Image source={macbook} style={styles.image} />
        <Text style={styles.judul}>New Macbook Pro 2019</Text>
        <Text style={styles.harga}>Rp. 25.000.000</Text>
        <Text style={styles.alamat}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.bt_beli}>
            <Text style={styles.text_beli}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
  wrapper: {
    padding: 12,
  },
  cardwrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 220,
    borderRadius: 8,
  },
  image: {width: 200, height: 200, borderRadius: 8},
  judul: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  harga: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#F2994A',
  },
  alamat: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  bt_beli: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  text_beli: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
