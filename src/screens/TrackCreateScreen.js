import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
    const startWatching = async () => {
        try {
            const granted = await requestPermissionsAsync()
            if(!granted) {
                throw new Error("Location permission not granted");
            }
        } catch(err) {

        }
    }

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