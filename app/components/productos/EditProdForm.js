import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import apiUrl from '../services/Products.service'

export default function EditProdForm(props) {

    const [nombre, setNombre] = useState("");
    const [valor, setValor] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

    const getProductosId = async (id) => {

        const response = await apiUrl.getProductosId(id)
        if (response?.data) {
            const data = response?.data[0]
            setNombre(data.nombre)
            setValor(data.valor)
            setDescripcion(data.descripcion)
            setImagen(data.imagen)
        }

    }

    const hladleSubmit = async e => {
        if (nombre.length > 0 && valor && descripcion & imagen) {
            const response = await apiUrl.modificarProductos({
                id: props.params?.id_producto,
                nombre: nombre,
                valor: valor,
                descripcion: descripcion,
                imagen: imagen
            })
            console.log(response)
        }
    }

    useEffect(() => {
        if (props.params?.id_producto) {
            getProductosId(props.params?.id_producto)
        }

    }, [props.params?.id_producto])

    return (
        <View style={styles.formContainer}>

            <Input
                text="nombre"
                onChange={val => setNombre(val)}
                placeholder="Nombre de Producto"
                containerStyle={styles.inputForm}
                value={nombre}
            />

            <Input
                text="valor"
                onChange={val => setValor(val)}
                placeholder="Valor de Producto"
                containerStyle={styles.inputForm}
                value={valor}
            />

            <Input
                text="descripcion"
                onChange={val => setDescripcion(val)}
                placeholder="Descripcion de Producto"
                containerStyle={styles.inputForm}
                value={descripcion}
            />

            <Input
                textto="imgen"
                onChange={val => setImagen(val)}
                placeholder="Imagen de Producto"
                containerStyle={styles.inputForm}
                value={imagen}
            />

            <Button title="Editar"
                containerStyle={styles.btnEditar}
                onPress={hladleSubmit}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {

        marginTop: 30,
    },

    inputForm: {
        width: "100%",
        marginTop: 20
    },

    btnEditar: {
        marginTop: 20,
        width: "95%"
    }

});