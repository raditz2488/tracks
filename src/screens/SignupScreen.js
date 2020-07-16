import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input  } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, Context } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ( { navigation } ) => {
    const { state, signup } = useContext(AuthContext);

    return <View>
        <AuthForm
            headerText="Sign Up for tracks"
            errorMessage={state.errorMessage}
            buttonText="Sign Up"
            onSubmit={signup}
        />
        <NavLink text="Already have an account! Sign In" routeName='Signin'/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SignupScreen;