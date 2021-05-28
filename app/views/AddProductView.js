import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AddProductForm from '../components/productos/AddProductForm'

export default function AddProductView() {

    return (

        <KeyboardAwareScrollView>

            <AddProductForm></AddProductForm>

        </KeyboardAwareScrollView>

    );

}