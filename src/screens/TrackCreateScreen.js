import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView from 'react-native-maps';

const TrackCreateScreen = () => {
    return <>
    <Text h3>Create Track</Text>
    <MapView/>
    </>
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;