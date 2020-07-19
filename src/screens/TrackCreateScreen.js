import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';

const TrackCreateScreen = () => {
    const points = [];
    for (let i = 0; i < 20; i++) {
        points.push({ 
            latitude: 37.33233 + i * 0.001,
            longitude: -122.03121 + i * 0.001
         });
    }

    return <>
        <SafeAreaView>
            <Text h3>Create Track</Text>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude:37.33233,
                    longitude: -122.03121,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Polyline coordinates={points}/>
            </MapView>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackCreateScreen;