import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';
import { Context as AuthContext } from '../contexts/AuthContext';

const AccountScreen = () => {
    const { logout } = useContext(AuthContext);
    return <Spacer>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Button title='Sign Out' onPress={logout}/>
    </Spacer>
    
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={30} />
}

const styles = StyleSheet.create({});

export default AccountScreen;