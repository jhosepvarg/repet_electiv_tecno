import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecView from '../views/SecView';

const Stack = createStackNavigator();

export default function ParcialStack(params) {

    return (

        <Stack.Navigator>

            <Stack.Screen name="sec" component={SecView} options={{ title: "Bienvenidos" }} />

        </Stack.Navigator>

    );

}