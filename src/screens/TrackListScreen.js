import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Context as TrackContext } from '../contexts/TrackContext';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';


const TrackListScreen = ( { navigation } ) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={ fetchTracks } />
        <FlatList 
            data={ state } 
            keyExtractor={ item => item._id }
            renderItem={ ({ item }) => {
                    return <ListItem chevron title={item.name} />
                }
            }
        />
    </>
}

TrackListScreen.navigationOptions = {
    title: 'Track list'
}

const styles = StyleSheet.create({});

export default TrackListScreen;