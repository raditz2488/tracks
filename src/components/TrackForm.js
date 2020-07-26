import React from 'react';
import { Input, Button } from 'react-native-elements';

const TrackForm = () => {
    return <>
        <Input placeholder="Enter track name" />
        <Button title="Start recording" />
    </>
}

export default TrackForm;