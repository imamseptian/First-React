import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class Flexbox extends Component {
  constructor(props) {
    super(props);
    console.log('==>Constructor');
    this.state = {
      subscriber: 400,
    };
  }

  // componentDidMount() {
  //   console.log('==> Component Mounting');
  //   console.log(new Date().toLocaleString());
  //   setTimeout(() => {
  //     this.setState({
  //       subscriber: 700,
  //     });
  //   }, 2000);
  // }

  // componentDidUpdate() {
  //   console.log('==> Component Update');
  // }

  // componentWillUnmount() {
  //   console.log('==> Component Unmount');
  // }

  render() {
    console.log('==> Component Render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* <Text>Materi FlexBox</Text> */}
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 14}}>
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/a/AATXAJwOORwLNc7-q7jDXbnye3aT6t3DCxnsVBMAA9Tv=s176-c-k-c0x00ffffff-no-rj-mo',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 14,
            }}></Image>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              AdmiralBulldog Of Hell
            </Text>
            <Text>{this.state.subscriber} K Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flexbox;
