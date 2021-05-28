import axios from 'axios';

const apiUrl = "http://192.168.0.2:4500/"

export async function obtenerUsuarios() {
    try {
        const result = await axios({
            method: 'get',
            url: apiUrl + 'registro/list'
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}

export async function insertarUsuarios() {
    try {
        const result = await axios({
            method: 'POST',
            url: apiUrl + 'registro/add'
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function modificarUser(id) {
    try {
        const result = await axios({
            method: 'PUT',
            url: apiUrl + 'registro/modificar/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function getUserId(id) {
    try {
        const result = await axios({
            method: 'GET',
            url: apiUrl + 'registro/mostrarProducto/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function EliminarUser(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: apiUrl + 'registro/delete/' + id
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}