import { useContext } from 'react';
import { Context as LocationContext } from '../contexts/LocationContext';
import { Context as TrackContext } from '../contexts/TrackContext';
export default () => {
    const { state: { name, locations }, reset } = useContext(LocationContext);
    const { createTrack } = useContext(TrackContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
    }

    return [saveTrack];
}