import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../contexts/TrackContext';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';


const TrackListScreen = ( { navigation } ) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={ fetchTracks } />
        <FlatList 
            data={ state } 
            keyExtractor={ item => item._id }
            renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{_id: item._id}) } >
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                }
            }
        />
    </>
}

const styles = StyleSheet.create({});

export default TrackListScreen;