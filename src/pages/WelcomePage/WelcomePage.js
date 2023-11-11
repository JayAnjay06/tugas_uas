import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet,BackHandler} from 'react-native';

const HomePage = ({navigation}) => {
  useEffect (() => {
    BackHandler.addEventListener('hardwareBackPress',() => true)
    return()=> {
      BackHandler.addEventListener('hardwareBackPress',() => true)
    }
  },[])
    return (
    <View style={{flex:1,backgroundColor:'#C5D2D8'}}>
        <View>
          <Text style={{textAlign:'center', fontSize:40, marginTop:25,color:'#E7B183'}}>Welcome</Text>
          <Text style={{textAlign:'center', justifyContent:'center',fontSize:20, marginTop:5,color:'#E7B183',width: 300, marginHorizontal:30}}>Terima Kasih Telah Memilih Aplikasi kami</Text>
          <Image
            style={{height: 360,width: 360}}
            source={require('../../assets/Images/logo.png')}/>
        </View>
        <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('MainTab')}
            style={{width: 250,height: 50, borderRadius:50,backgroundColor:'#F7DFD4', marginHorizontal:55, marginTop:20}}>
            <Text style={{fontSize:25,textAlign:'center', marginVertical:5}}>NEXT</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    
})

export default HomePage;