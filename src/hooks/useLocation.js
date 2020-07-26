import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        const milliSecondsInASecond = 1000
        const distanceIntervalInMeters = 10
        try {
            const granted = await requestPermissionsAsync()
            if(!granted) {
                throw new Error("Location permission not granted");
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: milliSecondsInASecond,
                distanceInterval: distanceIntervalInMeters
            }, callback);
        } catch(e) {
            setErr(e);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return [err];
}