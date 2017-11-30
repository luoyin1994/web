import axios from 'axios';

const apiUrl = 'http://180.168.216.242:8071/api/1.0/pc/get-configuration-system-file';
const tk     = 'tk=47b5c4921b01c920f1735a58a60a4caf';

export async function getTestApiData() {
    return await axios.get(apiUrl + '?' );
}