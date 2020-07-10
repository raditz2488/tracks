import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    {}
);