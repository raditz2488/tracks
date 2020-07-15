import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
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
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null} 
            <Spacer>
            <Button title={"Signup"} onPress={()=> signup(email, password)}/>
            </Spacer>
        </>
    );
}

