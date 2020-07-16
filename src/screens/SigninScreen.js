import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ( { navigation } ) => {
    return <View style={styles.container}>
        <AuthForm
            headerText="Sign In for tracks"
            errorMessage=""
            buttonText="Sign In"
            onSubmit={(email, password) => {}}
        />
        <NavLink text="Create an account! Sign Up" routeName='Signup'/>
    </View>
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SigninScreen;