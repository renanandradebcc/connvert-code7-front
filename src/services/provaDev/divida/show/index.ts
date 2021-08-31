import { AxiosResponse } from 'axios';

import { apiProvaDev } from "../../apiProvaDev";

import { Response, Request } from './types';
 
export const show = async ({ dividaId }: Request): Promise<AxiosResponse<Response>> => {
    const response = await apiProvaDev.get<Response>(`divida/${dividaId}`)

    return response;
}