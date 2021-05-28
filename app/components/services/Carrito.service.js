import axios from 'axios';

const apiUrl = "http://192.168.0.2:4500/"

export async function obtenerCompras() {
    try {
        const result = await axios({
            method: 'get',
            url: apiUrl + 'carrito/list'
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}

export async function insertarCompras() {
    try {
        const result = await axios({
            method: 'POST',
            url: apiUrl + 'carrito/add'
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function modificarCompra(id) {
    try {
        const result = await axios({
            method: 'PUT',
            url: apiUrl + 'carrito/modificar/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function getCompraId(id) {
    try {
        const result = await axios({
            method: 'GET',
            url: apiUrl + ' carrito/mostrarCompra/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function EliminarCompra(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: apiUrl + 'carrito/delete/' + id
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}