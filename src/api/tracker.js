import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance =  axios.create({
    baseURL:"http://bf72fd007da3.ngrok.io"
});

instance.interceptors.request.use(
    async (config) => {
        await AsyncStorage.getItem('token', (err, token) => {
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        });

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;