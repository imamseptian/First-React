import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

class StylingComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor: 'blue',
            marginTop: 20,
            marginLeft: 20,
          }}
        />
        <View
          style={{
            padding: 12,
            backgroundColor: '#F2F2F2',
            width: 220,
            borderRadius: 8,
          }}>
          <Image
            source={macbook}
            style={{width: 200, height: 200, borderRadius: 8}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook Pro 2019
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 16,
              color: '#F2994A',
            }}>
            Rp. 25.000.000
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              marginTop: 12,
            }}>
            Jakarta Barat
          </Text>
          <View
            style={{
              backgroundColor: '#6FCF97',
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              Beli
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
