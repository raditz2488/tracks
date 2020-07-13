import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return (email, password) => {

    };
}

const signin = (dispatch) => {
    //Accept email and password and call api
    //If logged in update reducer
    //If failure report it
}

const logout = (dispatch) => {
    //logout
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    {}
);