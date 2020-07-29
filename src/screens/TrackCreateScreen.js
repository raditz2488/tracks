import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext( LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);

    const [err] = useLocation(isFocused, callback);

    return <>
        <SafeAreaView>
            <Text h3>Create Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null }
            <TrackForm/>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default withNavigationFocus(TrackCreateScreen);