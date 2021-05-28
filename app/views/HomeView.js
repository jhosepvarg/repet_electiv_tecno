import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { obtenerProductos, EliminarProd } from '../components/services/Products.service';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation } from '@react-navigation/native';


export default function HomeView(props) {

    const [products, setProducts] = useState([]);



    const cargarProductos = async () => {
        const resultado = await obtenerProductos();
        if (resultado && resultado.data) {
            setProducts(resultado.data.products);
        }
    }

    useEffect(() => {

        cargarProductos();

    }, []);

    const EliminarProd = async (id) => {
        try {
            const response = await axios.delete(apiUrl + `$id`);
            const { data } = response
            console.log(data)
            this.cargarProductos()
        } catch (error) {
            console.log(error)
        }
    }

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <ScrollView>

                <Image
                    style={{ width: 150, height: 150 }}
                    resizeMode="contain"
                    style={styles.logo}
                    source={{
                        uri: item.imagen
                    }}
                />

                <View style={styles.viewContainer}>
                    <Text style={styles.text} >Id: {item.id}</Text>
                    <Text style={styles.text} >Nombre: {item.nombre}</Text>
                    <Text style={styles.text} >Valor: {item.valor}</Text>
                    <Text style={styles.text} >Descripcion: {item.descripcion}</Text>

                    <Button
                        title="Editar"
                        style={styles.btnContainerEditar}
                        onPress={() => navigation.navigate("editar")}
                        color="#70dc4c"
                    />

                    <Button
                        title="Eliminar"
                        style={styles.btnContainerEliminar}
                        color="#ff0000"
                        onPress={() => this.EliminarProd(products.id)}
                    />

                </View>

                <Divider style={styles.divider} />

            </ScrollView>

        );
    };


    return (


        <View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>

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

    divider: {
        backgroundColor: "#2f4f4f",
        margin: 40,
    },


    text: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold'
    },

    btnContainerEditar: {
        marginTop: 30,
        width: "50%",
    },

    btnContainerEliminar: {
        marginTop: 50,
        width: "50%",
    }
});

