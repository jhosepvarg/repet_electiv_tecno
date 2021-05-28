import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.formContainer}>

            <Input placeholder="Usuario"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="grease-pencil"
                    />
                }
            />

            <Input placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outli.ne" : "eye-outline"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }

            />

            <Button
                title="Registrarse"
                containerStyle={styles.btnContainerRegister}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    inputForm: {
        width: "100%",
        marginTop: 20
    },

    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },

});