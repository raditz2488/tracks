import * as Location from 'expo-location';

const tenMetersWithDegress = 0.0001;

const getLocation = increment => {
    return  {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitude: 5,
            altitudeAccuracy: 5,
            longitude: 73.83157010041113 + increment * tenMetersWithDegress,
            latitude: 18.45967198966745 + increment * tenMetersWithDegress 
        }
    };
};

let counter = 0;
let milliSecondsInASecond = 1000
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, milliSecondsInASecond)