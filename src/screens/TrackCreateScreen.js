import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';

const TrackCreateScreen = () => {
    return <>
    <Text h3>Create Track</Text>
    <MapView style={styles.map}/>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackCreateScreen;