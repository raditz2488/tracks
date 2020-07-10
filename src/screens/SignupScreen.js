import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ( { navigation } ) => {
    return <>
        <Text h3>SignupScreen</Text>
        <Input label='Email'/>
        <Input label='Password'/>
        <Button title={"Signup"}/>
    </>
}

const styles = StyleSheet.create({});

export default SignupScreen;