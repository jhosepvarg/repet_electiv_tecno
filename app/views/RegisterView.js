import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import RegisterForm from '../components/cuenta/RegisterForm';


export default function RegisterView(params) {

    return (
        <KeyboardAwareScrollView>

            <Image
                source={require('../../assets/user.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            <View style={styles.form}>

                <RegisterForm></RegisterForm>

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
