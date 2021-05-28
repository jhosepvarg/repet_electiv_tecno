import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default function Form(params) {


    return (

        <View style={styles.formContainer}>

            <Input placeholder="Nombre"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="grease-pencil"
                    />
                }
            />

            <Input placeholder="Tel"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="phone"
                    />
                }
            />

            <Input placeholder="Edad"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="grease-pencil"
                    />
                }
            />

            <Input placeholder="Dir"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="grease-pencil"

                    />
                }

            />

            <Button
                title="Registrarse"
                containerStyle={styles.btnContainerRegister}
            />

        </View>

    )

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