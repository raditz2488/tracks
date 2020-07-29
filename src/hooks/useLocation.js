import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber = null;

        const startWatching = async () => {
            const milliSecondsInASecond = 1000
            const distanceIntervalInMeters = 10
            try {
                const granted = await requestPermissionsAsync()
                if(!granted) {
                    throw new Error("Location permission not granted");
                }
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: milliSecondsInASecond,
                    distanceInterval: distanceIntervalInMeters
                }, callback);
            } catch(e) {
                setErr(e);
            }
        }


        if(shouldTrack) {
            startWatching();
        } else {
            if(subscriber) {
                subscriber.remove();
            }
            
            subscriber = null
        }

        return () => {
            if(subscriber) {
                subscriber.remove();
            }

            subscriber = null;
        }
        
    }, [shouldTrack, callback]);

    return [err];
}