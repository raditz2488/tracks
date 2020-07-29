import axios from 'axios';

const instance =  axios.create({
    baseURL:"http://bf72fd007da3.ngrok.io"
});


export default instance;