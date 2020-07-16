import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext, Context } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ( { navigation } ) => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
            headerText="Sign Up for tracks"
            errorMessage={state.errorMessage}
            buttonText="Sign Up"
            onSubmit={signup}
        />
        <NavLink text="Already have an account! Sign In" routeName='Signin'/>
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SignupScreen;