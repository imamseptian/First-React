import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

class SampleComponent extends Component {
  render() {
    return (
      <View>
        <View style={{width: 100, height: 80, backgroundColor: '#0abde3'}} />
        <Text>Ayaa</Text>
        <Text>Bulldog</Text>
        <Ayaya />
        <Text>Ayaa</Text>
        <Text>Ayaa</Text>
        <Photobox />
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen />
        <Profile />
      </View>
    );
  }
}

const Ayaya = () => {
  return <Text>Bruh Joy</Text>;
};

const Photobox = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}></Image>
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>INI CLASS COMPONENT</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/1000/1000/animals'}}
          style={{width: 200, height: 200, borderRadius: 50}}
        />
        <Text>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
