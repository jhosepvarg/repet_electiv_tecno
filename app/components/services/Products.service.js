import axios from 'axios';

const apiUrl = "http://192.168.0.2:4500/"

export async function obtenerProductos() {
    try {
        const result = await axios({
            method: 'get',
            url: apiUrl + 'productos/list'
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}

export async function insertarProductos() {
    try {
        const result = await axios({
            method: 'POST',
            url: apiUrl + 'productos/add'
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function modificarProductos(id) {
    try {
        const result = await axios({
            method: 'PUT',
            url: apiUrl + 'productos/modificar/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function getProductosId(id) {
    try {
        const result = await axios({
            method: 'GET',
            url: apiUrl + 'productos/mostrarProducto/' + id
        })
        return result;
    } catch (error) {
        console.log(e);
    }
}

export async function EliminarProd(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: apiUrl + 'productos/delete/' + id
        })
        return result;

    } catch (error) {
        console.log(error);
    }
}