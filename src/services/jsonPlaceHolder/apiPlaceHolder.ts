import axios from 'axios';

export const apiPlaceHolder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})