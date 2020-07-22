import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJS = () => {
  const nama = 'imam septian';

  //Peliharaan
  const hewanPeliharaan = {
    nama: 'Kitty',
    umur: 2,
    jenis: 'kucing',
    isLokal: true,
    induk: {
      jantan: 'king',
      betina: 'quin',
    },
  };

  const namaOrang = ['Imam', 'Irfan', 'Putra', 'Rama'];

  const SapaOrang = (nama, age) => {
    return console.log(`Hallo ${nama} usia anda ${age}`);
    // return console.log('hallo ' + nama + ' usia anda' + age + ' tahun');
  };

  SapaOrang('Imam', 21);
  console.log(typeof hewanPeliharaan);

  const SapaHewan = (hewanPeliharaan) => {
    // let hasilsapa = '';
    // if (hewanPeliharaan.nama === 'Miaw') {
    //   hasilsapa = 'Halo Miaw';
    // } else {
    //   hasilsapa = 'Hewan Sapa Ini?';
    // }
    // return hasilsapa;
    return hewanPeliharaan.nama === 'Miaw' ? 'Halo Miaw' : 'Ini Hewan sapa?';
  };

  const CekAngka = (angka) => {
    if (angka % 2 === 0) {
      return <Text>Genap</Text>;
    } else {
      return <Text>Ganjil</Text>;
    }
  };

  const deretAngka = [1, 2, 3, 4, 5, 6, 7, 9, 9, 9, 9, 9];

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Basic JS</Text>
      <Text style={styles.textTitle}>{nama}</Text>
      <Text style={styles.textTitle}>{hewanPeliharaan.induk.jantan}</Text>
      <Text style={styles.textTitle}>{SapaHewan(hewanPeliharaan)}</Text>
      <Text style={styles.textTitle}>=======================</Text>
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
      <Text style={styles.textTitle}>=======================</Text>
      {deretAngka.map((angka) => CekAngka(angka))}
    </View>
  );
};

export default BasicJS;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
