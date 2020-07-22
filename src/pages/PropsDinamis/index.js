import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />

      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text style={{marginBottom: 20}}>Test Konten Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="YoungLex berbuat kebaikan Gayn Asique"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36136784_227505131217263_861571779607396352_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tM3ki_hBHC8AX8zmG1l&oh=8fa3eab8ba71b300303cb15e71acbd14&oe=5F1906B3"
          />
          <Story
            judul="YoungLex berbuat kebaikan Gayn Asique"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.291.750.750a/s150x150/36148320_655480241489132_8330494863397093376_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MM4Irt2-_sMAX_MX9IG&oh=548128c2d3f2c3308f3de0c3bf0f9b9d&oe=5F191A66"
          />
          <Story
            judul="YoungLex berbuat kebaikan Gayn Asique"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36624925_849948541872073_3446102443425792000_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0tGKpkf0MD8AX86vide&oh=61c4b96f7ca52e4e1f81cd1f1ad69c7f&oe=5F18E9B8"
          />
          <Story
            judul="YoungLex berbuat kebaikan Gayn Asique"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36136784_227505131217263_861571779607396352_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tM3ki_hBHC8AX8zmG1l&oh=8fa3eab8ba71b300303cb15e71acbd14&oe=5F1906B3"
          />
          <Story
            judul="YoungLex berbuat kebaikan Gayn Asique"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.291.750.750a/s150x150/36148320_655480241489132_8330494863397093376_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MM4Irt2-_sMAX_MX9IG&oh=548128c2d3f2c3308f3de0c3bf0f9b9d&oe=5F191A66"
          />
          <Story
            judul="bruh"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36624925_849948541872073_3446102443425792000_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0tGKpkf0MD8AX86vide&oh=61c4b96f7ca52e4e1f81cd1f1ad69c7f&oe=5F18E9B8"
          />
          <Story
            judul="breketek"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36136784_227505131217263_861571779607396352_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tM3ki_hBHC8AX8zmG1l&oh=8fa3eab8ba71b300303cb15e71acbd14&oe=5F1906B3"
          />
          <Story
            judul="dudut"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.291.750.750a/s150x150/36148320_655480241489132_8330494863397093376_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MM4Irt2-_sMAX_MX9IG&oh=548128c2d3f2c3308f3de0c3bf0f9b9d&oe=5F191A66"
          />
          <Story
            judul="bruh"
            gambar="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.292.750.750a/s150x150/36624925_849948541872073_3446102443425792000_n.jpg?_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0tGKpkf0MD8AX86vide&oh=61c4b96f7ca52e4e1f81cd1f1ad69c7f&oe=5F18E9B8"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
