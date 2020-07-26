import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const Map = () => {
    return <MapView 
        style={styles.map}
        initialRegion={{
        latitude:37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 }
        }
    >
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;