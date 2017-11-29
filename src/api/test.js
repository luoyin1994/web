import axios from 'axios';

const apiUrl = 'http://localhost:3000/';

export function getTestApiData() {
    return axios.get(apiUrl);
}
