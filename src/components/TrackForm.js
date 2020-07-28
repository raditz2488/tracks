import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {

    const { state, setName, startRecording, stopRecording } = useContext(LocationContext);

    return <>
        <Spacer>
            <Input 
                placeholder="Enter track name" 
                text={state.name}
                onChangeText={ setName }
            />
        </Spacer>
        <Spacer>
            { state.recording 
                ? <Button title="Stop" onPress={ stopRecording } />
                : <Button title="Start recording" onPress={ startRecording }/>
            }
            
        </Spacer>
    </>
}

export default TrackForm;