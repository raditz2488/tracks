import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../contexts/TrackContext';

const TrackDetailScreen = ({navigation}) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);
    const track = state.find(t => t._id === _id);
    const coords = track.locations.map( location => location.coords)
    const firstLocation = coords[0]

    return <MapView 
            height={300}
            initialRegion={{
                latitudeDelta:0.01, 
                longitudeDelta:0.01,
                ...firstLocation
                }
            }
        >
            <Polyline coordinates={ coords }/>
        </MapView>
}

const styles = StyleSheet.create({});

export default TrackDetailScreen;