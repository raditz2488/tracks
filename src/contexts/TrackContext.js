import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
    switch(action.type) {
        case 'fetch':
            return action.payload;
        default: return state;
    }
}

const createTrack = dispatch => async (name, locations) => {
    await trackerAPI.post('/tracks', { name, locations });
};
const fetchTracks = dispatch => async () => {
    const response = await trackerAPI.get('/tracks');
    dispatch({ type:'fetch', payload: response.data });
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    []
);