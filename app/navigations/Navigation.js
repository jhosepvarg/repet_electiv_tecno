import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import ProductosStack from './ProductosStack';
import ComentarosStack from './ComentariosStack';
import LoginStack from './LoginStack';
import CarritoStack from './CarritoStack';
import HomeSatck from './HomeStack';



const Tab = createBottomTabNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator

                initialRouteName="home"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00a680"
                }}

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >

                <Tab.Screen name="home" component={HomeSatck} options={{ title: "Home" }} />

                <Tab.Screen name="products" component={ProductosStack} options={{ title: "Productos" }} />

                <Tab.Screen name="carrito" component={CarritoStack} options={{ title: "Carrito" }} />

                <Tab.Screen name="comentarios" component={ComentarosStack} options={{ title: "Comentarios" }} />

                <Tab.Screen name="login" component={LoginStack} options={{ title: "Login" }} />



            </Tab.Navigator>
        </NavigationContainer>
    );

}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "home":
            iconName = "home"
            break;

        case "products":
            iconName = "shopping-outline"
            break;

        case "carrito":
            iconName = "cart-arrow-down"
            break;

        case "comentarios":
            iconName = "comment-multiple"
            break;

        case "login":
            iconName = "login"
            break;

        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}