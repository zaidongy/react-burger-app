import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bca12.firebaseio.com/'
});

export default instance;