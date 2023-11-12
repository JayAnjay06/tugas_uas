import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';

//component
import Header from '../../component/Header/Header';
import Cardp from '../../component/CardData/Card';
import Card from '../../component/CardPopuler/Card';

const HomePage = () => {
  const [DiSuka, setDisuka] =useState (0)

  return (
    <ScrollView style={styles.container}>
    <Header suka={DiSuka}/>
    <View>
      <Text style={styles.texs}>TRENDING</Text>
      <Cardp onButtom={() => setDisuka(DiSuka + 1)}/>
    </View>
    <View>
      <Card onButtom={() => setDisuka(DiSuka + 1)}/>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5D2D8'
  },
  texs: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10
  },
  conten: {
    marginTop: 20,
    height: 280,
  },
})

export default HomePage;