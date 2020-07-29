import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    switch(action.type) {
        default: return state;
    }
}

const createTrack = dispatch => () => {};
const fetchTracks = dispatch => () => {};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    []
);