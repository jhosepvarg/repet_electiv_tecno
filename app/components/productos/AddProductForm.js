import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements'
import axios from 'axios';

export default function AddProductForm() {

    const [nombre, setNombre] = useState("")
    const [valor, setValor] = useState(0)
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")

    const insertarProductos = async () => {
        const obj = { nombre, valor, descripcion, imagen }
        const response = await axios.post("http://192.168.0.2:4500/productos/add", obj)
        alert(response.data.msg)
        setNombre("")
        setValor(0)
        setDescripcion("")
        setImagen("")
    }



    return (
        <View style={styles.formContainer}>

            <Input
                text="Nombre"
                valor={nombre}
                name="nombre"
                placeholder="Nombre Del Producto"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="grease-pencil"
                    />
                }
                onChange={e => setNombre(e)}
            />

            <Input
                name="valor"
                valor={valor}
                Text="Valor"
                placeholder="Valor"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="currency-usd"

                    />
                }
                onChange={e => setValor(e)}
            />

            <Input
                name="descripcion"
                valor={descripcion}
                Text="descripcion"
                placeholder="Descripción Del Producto"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="card-text"

                    />
                }
                onChange={e => setDescripcion()}
            />

            <Button
                title="Añadir Producto"
                containerStyle={styles.btnAdd}
                onPress={() => insertarProductos()}
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
        width: "90%",
        marginTop: 20
    },

    btnAdd: {
        marginTop: 20,
        width: "85%"
    },

});