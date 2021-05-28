import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation } from '@react-navigation/native';
import { obtenerComentarios, EliminarComentario } from '../components/services/Comentarios.service';


export default function CommentsView(props) {

    const [comments, setComments] = useState([]);



    const loadComments = async () => {
        const resultado = await obtenerComentarios();
        if (resultado && resultado.data) {
            setComments(resultado.data.data);
        }
    }

    useEffect(() => {

        loadComments();

    }, []);

    const EliminarComentario = async (id) => {
        try {
            const response = await axios.delete(apiUrl + `$id`);
            const { data } = response
            console.log(data)
            this.cargarComentarios()
        } catch (error) {
            console.log(error)
        }
    }

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <ScrollView>


                <View style={styles.viewContainer}>
                    <Text style={styles.text} >Id: {item.id_comentario}</Text>
                    <Text style={styles.text} >Comentario: {item.comentario}</Text>

                    <Button
                        title="Editar"
                        style={styles.btnContainerEditar}
                        onPress={() => navigation.navigate("addComment")}
                        color="#99a0e8"
                    />

                    <Button
                        title="Eliminar"
                        style={styles.btnContainerEliminar}
                        color="#ff0000"
                        onPress={() => this.EliminarComent(comments.id)}
                    />

                </View>

                <Divider style={styles.divider} />

            </ScrollView>

        );
    };


    return (


        <View>

            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>

    );
}

const styles = StyleSheet.create({


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

