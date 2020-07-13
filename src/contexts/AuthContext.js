import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signup_failure':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async (email, password) => {
        try {
            const response = await trackerAPI.post("/signup", { email, password });
            dispatch({ type:'signup', payload:response.data });
        } catch(error) {
            dispatch({
                type:'signup_failure', 
                payload: "Something went wrong with signup." 
            });
        }
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
    { signup },
    { errorMessage: "" }
);