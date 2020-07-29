import React, { useContext } from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import { Context as TrackContext } from '../contexts/TrackContext';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';


const TrackListScreen = ( { navigation } ) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={ fetchTracks }>
            <FlatList 
                data={state} 
                keyExtractor={(item) => item._id }
                renderItem={({ item }) => <ListItem  chevron title={item.name}/>}
            />
            <Button title='Show detail' onPress={() => navigation.navigate('TrackDetail')}/>
        </NavigationEvents>
    </>
}

TrackListScreen.navigationOptions = {
    title: 'Track list'
}

const styles = StyleSheet.create({});

export default TrackListScreen;