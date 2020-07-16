import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../contexts/AuthContext';

const SigninScreen = ( { navigation } ) => {
    const { state, signin } = useContext(AuthContext);

    return <View style={styles.container}>
        <AuthForm
            headerText="Sign In for tracks"
            errorMessage={state.errorMessage}
            buttonText="Sign In"
            onSubmit={signin}
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