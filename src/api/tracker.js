import axios from 'axios';

const instance =  axios.create({
    baseURL:"http://bf72fd007da3.ngrok.io"
});

instance.interceptors.request.use(
    () => {},
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;