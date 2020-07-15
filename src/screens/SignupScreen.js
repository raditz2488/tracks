import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, Context } from '../contexts/AuthContext';

const SignupScreen = ( { navigation } ) => {
     

    const { state, signup } = useContext(AuthContext);

    return <View>
        
    </View>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop:15,
    }
});

export default SignupScreen;