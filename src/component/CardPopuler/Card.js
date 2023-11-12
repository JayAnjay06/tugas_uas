import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'


export default function Card(props) {
    const [Populer, setPopuler] = useState([
        {
            judul: 'nama novel',
            image: require('../../assets/Images/6.png')
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/7.png')
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/8.png')
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/9.png')
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/10.png')
        },
    ])
    return (
        <View>
            <FlatList
                data={Populer}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.Text}>{item.judul}</Text>
                        <TouchableOpacity
                        onPress={props.onButtom}
                        style={styles.box} >
                            <Text style={styles.suka}> suka</Text>
                        </TouchableOpacity>
                    </View>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 350,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        flexDirection: 'row',
        elevation: 1
    },
    image: {
        width: 70,
        height: 100,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10
    },
    Text: {
        textAlign: 'center',
        marginTop: 20
    },
    box: {
        height:30,
        width: 90,
        marginLeft: 80,
        marginTop:80,
        borderRadius:10,
        elevation: 1,
    },
    suka: {
        textAlign: 'center',
        marginTop : 5
    }
});
