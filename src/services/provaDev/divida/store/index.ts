import { AxiosResponse } from 'axios';

import { apiProvaDev } from "../../apiProvaDev";

import { Response, Request } from './types';
 
export const store = async (payload: Request): Promise<AxiosResponse<Response>> => {
    const response = await apiProvaDev.post<Response>('divida', payload)

    return response;
}