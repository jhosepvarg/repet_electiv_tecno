import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../components/cuenta/LoginForm';

export default function LoginView() {

    const navigation = useNavigation();

    return (

        <KeyboardAwareScrollView>

            <Image
                source={require('../../assets/user.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            <View style={styles.viewContainer}>
                <LoginForm></LoginForm>
                <CreateAccount></CreateAccount>
            </View>

            <Divider style={styles.divider} />

            <Text onPress={() => navigation.navigate("listar")}> Usuarios Registrados </Text>

        </KeyboardAwareScrollView>

    );

}

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <Text style={styles.textRegister}>
            ¿Aun no te has registrado? {" "}
            <Text onPress={() => navigation.navigate("register")}
                style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
    );
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

});