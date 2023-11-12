import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';

//component
import Header from '../../component/Header/Header';
import Cardp from '../../component/CardData/Card';
import Card from '../../component/CardPopuler/Card';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.texs}>TRENDING</Text>
        <Cardp />
      </View>
      <View>
        <Card />
      </View>
    </ScrollView>
  )
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