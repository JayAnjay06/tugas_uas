import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'


export default function Card() {
    const [data, setdata] = useState([
        {
            judul: 'nama novel',
            image: require('../../assets/Images/1.png'),
            seleksi: false,
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/2.png'),
            seleksi: false,
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/3.png'),
            seleksi: false,
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/4.png'),
            seleksi: false,
        },
        {
            judul: 'nama novel',
            image: require('../../assets/Images/5.png'),
            seleksi: false,
        },
    ]);
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View style={styles.conten}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.Text}>{item.judul}</Text>
                    </View>} />
        </View>
    )
}

const styles = StyleSheet.create({
    conten: {
        width: 200,
        height: 300,
        elevation: 1,
        marginHorizontal: 20,
        borderRadius: 20
    },
    image: {
        height: 220,
        width: 150,
        borderRadius: 20,
        marginHorizontal: 25,
        marginTop: 20
    },
    Text: {
        marginHorizontal: 35,
        textAlign: 'center',
        marginTop: 15
    },
});
