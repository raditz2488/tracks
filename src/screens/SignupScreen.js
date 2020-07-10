import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

const SignupScreen = ( { navigation } ) => {
    return <>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
        <Button title={"Show signin"} onPress={() => navigation.navigate('Signin')}/>
        <Button title="Show main flow" onPress={() => navigation.navigate('mainFlow')}/>
    </>
}

const styles = StyleSheet.create({});

export default SignupScreen;