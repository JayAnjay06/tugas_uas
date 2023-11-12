import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>H O M E</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 350,
    backgroundColor: '#9BABB8',
    borderRadius: 10,
    marginTop:10,
    marginHorizontal:5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
    color: '#ffff'
  },
  Dekorasi: {
    fontSize: 15,
    marginLeft: 20
  },
});

export default Header;