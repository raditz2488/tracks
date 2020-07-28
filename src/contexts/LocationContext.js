import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_Location':
            return { ...state, currentLocation: action.payload };

        case 'record_location':
            return { ...state, locations: [...state.locations, action.payload] };

        case 'start_recording':
            return { ...state, recording: true };

        case 'stop_recording':
            return { ...state, recording: false};

        case 'set_name':
            return {...state, name: action.payload};

        default:
            return state;
    }
};

const startRecording = dispatch => () => {
    console.log("Recording to start:::::::::");
    dispatch({type: 'start_recording'});
};
const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'});
};

const addLocation = dispatch => (location, isRecording) => {
    dispatch({ type: 'add_Location', payload: location});
    if(isRecording) {
        dispatch({ type: 'record_location', payload: location });
    }
};

const setName = dispatch => (name) => {
    dispatch({type: "set_name", payload: name});
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, setName },
    { recording: false, locations:[], currentLocation: null, name:'' }
);