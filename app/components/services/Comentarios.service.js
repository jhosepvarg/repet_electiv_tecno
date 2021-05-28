import axios from 'axios';

const apiUrl = "http://192.168.0.2:4500/"

export async function obtenerComentarios() {
    try {
        const result = await axios({
            method: 'get',
            url: apiUrl + 'comentarios/list'
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}

export async function insertarComentarios() {
    try {
        const result = await axios({
            method: 'POST',
            url: apiUrl + 'comentarios/add'
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function modificarComentarios(id) {
    try {
        const result = await axios({
            method: 'PUT',
            url: apiUrl + 'comentarios/modificar/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function getComentarioId(id) {
    try {
        const result = await axios({
            method: 'GET',
            url: apiUrl + 'comentarios/mostrarProducto/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function EliminarComentario(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: apiUrl + 'comentarios/delete/' + id
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}