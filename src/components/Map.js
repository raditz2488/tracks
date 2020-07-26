import React, { useContext } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Context as LocationContext } from '../contexts/LocationContext';

const Map = () => {

    const { state } = useContext(LocationContext);

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