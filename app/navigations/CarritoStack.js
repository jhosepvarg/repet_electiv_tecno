import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CarritoView from '../views/CarritoView';

const Stack = createStackNavigator();

export default function CarritoStack(params) {

    return (

        <Stack.Navigator>

            <Stack.Screen name="carrito" component={CarritoView} options={{ title: "Aqui Estaran Tus Compras" }} />

        </Stack.Navigator>

    );
}