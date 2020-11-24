import axios from 'axios';

const connect = axios.create({
    baseURL: 'http://localhost:3333',
});

export default connect;