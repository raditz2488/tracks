import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, Context } from '../contexts/AuthContext';

const SignupScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const { state, signup } = useContext(AuthContext);
    return <View>
        <Spacer>
        <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label='Email'
            value={email}
            onChangeText={ setEmail }
            autoCorrect={false}
            autoCapitalize='none'
        />
        <Spacer/>
        <Input label='Password'
            value={password}
            onChangeText={ setPassword }
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
        />
        <Spacer>
        <Button title={"Signup"}/>
        </Spacer>
    </View>
}

const styles = StyleSheet.create({});

export default SignupScreen;