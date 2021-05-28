import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddProductView from '../views/AddProductView';

const Stack = createStackNavigator();

export default function ProductosStack() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="products" component={AddProductView} options={{ title: "Añadir Productos" }} />
        </Stack.Navigator>

    );

}