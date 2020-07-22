import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.counter}>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View style={styles.counter}>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

export default function StateDinamis() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>React Natives State Dinamis</Text>
      <Text style={styles.subtitle}>Function Component(Hooks)</Text>
      <Counter />
      <Counter />
      <Text style={styles.subtitle}>Class Component</Text>
      <CounterClass />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
  },
  counter: {
    marginVertical: 10,
  },
});
