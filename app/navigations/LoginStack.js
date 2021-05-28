import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import UsersView from '../views/UsersView';
import EditUserView from '../views/EditUserView';

const Stack = createStackNavigator();

export default function LoginSatck() {

    return (

        <Stack.Navigator>

            <Stack.Screen name="login" component={LoginView} options={{ title: "Inicia Sesion" }} />

            <Stack.Screen name="register" component={RegisterView} options={{ title: "Registrate" }} />

            <Stack.Screen name="listar" component={UsersView} options={{ title: "Registrados" }} />

            <Stack.Screen name="editar" component={EditUserView} options={{ title: "Modificar" }} />

        </Stack.Navigator>

    );
}