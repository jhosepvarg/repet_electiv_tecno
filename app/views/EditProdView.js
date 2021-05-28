import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import EditProdForm from '../components/productos/EditProdForm.js'

export default function EditProdView() {
    return (
        <View style={styles.viewContainer}>
            <EditProdForm>

            </EditProdForm>
        </View>
    )
}

const styles = StyleSheet.create({

    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },

    viewContainer: {
        marginRight: 50,
        marginLeft: 50,
    },

    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },

    btnRegister: {
        color: "#20b2aa"

    },

    divider: {
        backgroundColor: "#2f4f4f",
        margin: 40,
    }

})
