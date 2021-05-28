import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Form from '../components/parcial/Form';


export default function RegisterView(params) {

    return (
        <KeyboardAwareScrollView>


            <View style={styles.form}>

                <Form></Form>

            </View>

        </KeyboardAwareScrollView>

    );

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
