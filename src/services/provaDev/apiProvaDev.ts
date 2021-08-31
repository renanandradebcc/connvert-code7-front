import axios from 'axios';

export const apiProvaDev = axios.create({
    baseURL: "https://provadev.xlab.digital/api/v1",
    params: {
        uuid: process.env.REACT_APP_UUID,
    }
})