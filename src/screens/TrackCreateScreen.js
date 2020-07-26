import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
    const { addLocation } = useContext( true, LocationContext);
    const [err] = useLocation(addLocation);

    return <>
        <SafeAreaView>
            <Text h3>Create Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null }
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackCreateScreen;