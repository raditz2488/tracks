import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigatorRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signup_failure':
            return { ...state, errorMessage: action.payload };

        case 'signin_failure':
            return {...state, errorMessage: action.payload };

        case 'signup':
            return { ...state, errorMessage: "", token: action.payload };

        case 'signin':
            return {...state, errorMessage:"", token: action.payload };

        case 'clear_error_message':
            return {...state, errorMessage:""};

        case 'logout':
            return { ...state, errorMessage: "", token: null }
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async (email, password) => {
        try {
            const response = await trackerAPI.post("/signup", { email, password });
            await AsyncStorage.setItem('token', response.data.token, (err) => {
                dispatch({
                    type:'signup_failure', 
                    payload: "Something went wrong with signup." 
                });
            })
            dispatch({ type:'signup', payload:response.data.token });


            navigate('TrackList');
        } catch(err) {
            dispatch({
                type:'signup_failure', 
                payload: "Something went wrong with signup." 
            });
        }
    };
}

const signin = (dispatch) => {
    return async (email, password) => {
        try {
            const response = await trackerAPI.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token, (err) => {
                dispatch({
                    type: "signin_failure",
                    payload: "Something went wrong with signin."
                })
            })
    
            dispatch({
                type: "signin",
                payload: response.data.token
            });

            navigate('TrackList');
        } catch(err) {
            dispatch({
                type: "signin_failure",
                payload: "Something went wrong with signin." 
            });
        }
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({
                type:"signin",
                payload: token
            });

            navigate('TrackList');
        } else {
            navigate('loginFlow');
        }
    }
}

const clearErrorMessage = ( dispatch ) => {
    return () => {
        dispatch({
            type: "clear_error_message",
        });
    }
}

const logout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem('token', (err) => {
            if(!err) {
                dispatch({
                    action:'logout'
                });
            }
        })
        navigate('loginFlow');
    } catch(err) {

    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, clearErrorMessage, tryLocalSignin, logout },
    { errorMessage: "", token: null }
);