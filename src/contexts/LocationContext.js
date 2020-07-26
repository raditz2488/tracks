import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_Location':
            return { ...state, currentLocation: action.payload };

        default:
            return state;
    }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => (location, isRecording) => {
    dispatch({ type: 'add_Location', payload: location});
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations:[], currentLocation: null }
);