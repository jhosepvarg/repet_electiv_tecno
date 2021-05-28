import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommentsView from '../views/CommentsView';
import AddCommentView from '../views/AddCommentView';

const Stack = createStackNavigator();

export default function ComentariosStack(params) {

    return (

        <Stack.Navigator>

            <Stack.Screen name="comentarios" component={CommentsView} options={{ title: "Comentarios" }} />

            <Stack.Screen name="addComment" component={AddCommentView} options={{ title: "Agrega Un comentario" }} />

        </Stack.Navigator>

    );
}