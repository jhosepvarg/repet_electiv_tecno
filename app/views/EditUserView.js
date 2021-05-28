import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegisterForm from '../components/cuenta/RegisterForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default function EditUserView() {
    return (
        <KeyboardAwareScrollView>

            <RegisterForm></RegisterForm>

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },

    form: {
        marginRight: 40,
        marginLeft: 40
    }
});

