import React from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const TrackForm = () => {
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