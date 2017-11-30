let axios = require('axios');

const apiUrl = 'http://180.168.216.242:8071/api/1.0/pc/get-configuration-system-file';
const tk     = 'tk=47b5c4921b01c920f1735a58a60a4caf';

let api = {
    getTestApiData() {
        return axios.get(apiUrl + '?' + tk);
    }
};

async function getTestApiData() {
    let data = await api.getTestApiData();
    return data.data;
}

let data = getTestApiData();