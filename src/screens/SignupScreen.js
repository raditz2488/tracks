import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';

const SignupScreen = ( { navigation } ) => {
    return <View>
        <Spacer>
        <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label='Email'/>
        <Spacer/>
        <Input label='Password'/>
        <Spacer>
        <Button title={"Signup"}/>
        </Spacer>
    </View>
}

const styles = StyleSheet.create({});

export default SignupScreen;