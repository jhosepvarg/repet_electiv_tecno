import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OutNavi() {

    return (

        <View>
            <Text style={styles.texTitle}>Hola soy la primera view</Text>
        </View>

    );
}

const styles = StyleSheet.create({

    texTitle: {
        marginTop: 500,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 30,
    }

});