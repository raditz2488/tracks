import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {

    const { state, setName, startRecording } = useContext(LocationContext);

    return <>
        <Spacer>
            <Input placeholder="Enter track name" />
        </Spacer>
        <Spacer>
            <Button title="Start recording" />
        </Spacer>
    </>
}

export default TrackForm;