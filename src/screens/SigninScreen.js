import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

const SigninScreen = ( { navigation } ) => {
    return <>
        <Text style={{ fontSize: 48 }}>SigninScreen</Text>
        <Button title="Show signup" onPress={() => navigation.navigate('Signup') }/>
    </>
}

const styles = StyleSheet.create({});

export default SigninScreen;