import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>H O M E</Text>
      <Text style={styles.texs}>
        {props.suka}
      <Icon name="heart" size={30} color="#900"  style={styles.Icon}/>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height: 50,
    width: 350,
    backgroundColor: '#9BABB8',
    borderRadius: 10,
    marginTop:10,
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
  texs: {
    marginLeft: 200,
    marginTop: 10
  },
  Icon : {
    marginLeft:100,
    marginTop: 20
  }
});

export default Header;