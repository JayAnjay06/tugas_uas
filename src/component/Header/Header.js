import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's Read</Text>
      <Text style={styles.Dekorasi}>Mengarungi Lautan Fantasi Melalui Kata-kata</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 360,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    bottom: 30

  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 20
  },
  Dekorasi: {
    fontSize: 15,
    marginLeft: 20
  },
});

export default Header;