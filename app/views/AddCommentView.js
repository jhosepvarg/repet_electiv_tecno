import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AddCommentForm from '../components/comentarios/AddCommentForm';

export default function LoginView() {

    return (

        <KeyboardAwareScrollView>

            <AddCommentForm></AddCommentForm>

        </KeyboardAwareScrollView>

    );

}


const styles = StyleSheet.create({


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

});