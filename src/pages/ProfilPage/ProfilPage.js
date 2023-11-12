import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';



export default function ProfilPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <View style={styles.box}>
          <View style={styles.box1}>
            <Image source={require('../../assets/Images/user.jpg')} 
            style={styles.image}/>
          </View>
          <Text style={styles.name}>User Name</Text>
        </View>
      </View>
      <View style={styles.tent}>
        <View style={styles.box2}>
          <Text style={styles.text}>100k</Text>
          <Text style={styles.text1}>Follower</Text>
        </View>
        <TouchableOpacity style={styles.set}>
          <Text style={styles.texs}>Setting</Text>
          <Icon name="caret-right" size={30}  style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.set}>
          <Text style={styles.texs}>About</Text>
          <Icon name="caret-right" size={30}  style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sets}>
          <Text style={styles.texx}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5D2D8'
  },
  con: {
    flex: 0.4,
    backgroundColor: '#ffff'
  },
  box:{
    width: 300,
    height: 130,
    elevation:1,
    marginTop: 120,
    marginHorizontal:30,
    borderRadius:20
  },
  box1: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginHorizontal: 80,
    bottom: 80,
    elevation:1,
  },
  image : {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name :{
    bottom:70,
    fontSize: 20,
    textAlign: 'center',
  },
  tent: {
    flex: 1
  },
  box2: {
    width: 300,
    height: 100,
    elevation:1,
    marginTop:100,
    borderRadius:10,
    marginHorizontal:28,
  },
  text : {
    fontSize:30,
    textAlign: 'center',
    marginTop:10
  },
  text1: {
    fontSize: 20,
    textAlign: 'center'
  },
  set: {
    height: 50,
    width: 300,
    marginTop:10,
    marginHorizontal: 28,
    borderRadius:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    elevation: 2,
  },
  texs:{
    fontSize:20,
    marginTop:10,
    marginLeft:10
  },
  icon : {
    marginRight: 20,
    marginTop: 10
  },
  sets :{
    height: 50,
    width: 100,
    marginTop:10,
    marginHorizontal: 125,
    borderRadius:20,
    flexDirection: 'row',
    elevation: 2,
  },
  texx : {
    fontSize:20,
    marginTop:10,
    marginLeft:15
  }

})