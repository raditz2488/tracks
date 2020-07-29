import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {

    const { state: { name, recording, locations }, setName, startRecording, stopRecording } = useContext(LocationContext);

    return <>
        <Spacer>
            <Input 
                placeholder="Enter track name" 
                text={name}
                onChangeText={ setName }
            />
        </Spacer>
        <Spacer>
            { 
                recording 
                    ? <Button title="Stop" onPress={ stopRecording } />
                    : <Button title="Start recording" onPress={ startRecording }/>
            }   
        </Spacer>
        <Spacer>
            {
                recording && locations.length 
                    ? <Button title="Save track" />
                    : null
            }
        </Spacer>
    </>
}

export default TrackForm;