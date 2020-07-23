import '../_mockLocation';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'; 

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        const milliSecondsInASecond = 1000
        const distanceIntervalInMeters = 10
        try {
            const granted = await requestPermissionsAsync()
            if(!granted) {
                throw new Error("Location permission not granted");
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: milliSecondsInASecond,
                distanceInterval: distanceIntervalInMeters
            }, (location) => {
                console.log(location);
            });
        } catch(e) {
            setErr(e);
        }
    }

    useEffect(() => {
        startWatching()
    }, []);
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