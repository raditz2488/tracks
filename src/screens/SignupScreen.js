import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

const SignupScreen = ( { navigation } ) => {
    return <>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
        <Button title={"Show signin"} onPress={() => navigation.navigate('Signin')}/>
    </>
}

const styles = StyleSheet.create({});

export default SignupScreen;