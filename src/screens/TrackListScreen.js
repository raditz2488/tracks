import React from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';

const TrackListScreen = ( { navigation } ) => {
    return <>
        <FlatList data={[]} />
        <Button title='Show detail' onPress={() => navigation.navigate('TrackDetail')}/>
    </>
}

TrackListScreen.navigationOptions = {
    title: 'Track list'
}

const styles = StyleSheet.create({});

export default TrackListScreen;