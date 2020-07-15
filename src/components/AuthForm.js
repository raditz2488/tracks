import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
            <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null} 
            <Spacer>
            <Button title={buttonText} onPress={()=> onSubmit(email, password)}/>
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop:15,
    }
});

export default AuthForm;

