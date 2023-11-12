import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react';

//component
import Header from '../../component/Header/Header';

export default function HomePage() {
  const [data, setdata] = useState([
    {
      judul: 'nama novel',
      image: require('../../assets/Images/1.png')
    },
    {
      judul: 'nama novel',
      image: require('../../assets/Images/2.png')
    },
    {
      judul: 'nama novel',
      image: require('../../assets/Images/3.png')
    },
    {
      judul: 'nama novel',
      image: require('../../assets/Images/4.png')
    },
    {
      judul: 'nama novel',
      image: require('../../assets/Images/5.png')
    },
  ]);
  return (
    <View>
      <Header/>
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicatorhorizontal={false}
            renderItem={({ item }) =>
            <View>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.Text}>{item.judul}</Text>
            </View>}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 150,
    marginHorizontal:20
  },
  Text:{
    marginHorizontal: 35
  }
})