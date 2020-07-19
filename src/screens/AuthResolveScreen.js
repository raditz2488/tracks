import React, { useEffect, useContext } from 'react';
import { Context as  AuthContext } from '../contexts/AuthContext';

const AuthResolveScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
}

export default AuthResolveScreen;