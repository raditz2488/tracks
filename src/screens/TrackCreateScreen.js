import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return <>
        <SafeAreaView>
            <Text h3>Create Track</Text>
            <Map/>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackCreateScreen;