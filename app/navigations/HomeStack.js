import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../views/HomeView';
import EditProdView from '../views/EditProdView';

const Stack = createStackNavigator();

export default function HomeSatck(params) {

    return (

        <Stack.Navigator>

            <Stack.Screen name="home" component={HomeView} options={{ title: "Bienvenidos" }} />

            <Stack.Screen name="editar" component={EditProdView} options={{ title: "Editar" }} />


        </Stack.Navigator>

    );

}