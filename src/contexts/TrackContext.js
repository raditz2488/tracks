import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
    switch(action.type) {
        default: return state;
    }
}

const createTrack = dispatch => async (name, locations) => {
    await trackerAPI.post('/tracks', { name, locations });
};
const fetchTracks = dispatch => () => {};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    []
);