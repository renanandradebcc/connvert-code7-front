import { AxiosResponse } from 'axios';

import { apiProvaDev } from "../../apiProvaDev";

import { Request, Response } from './types';
 
export const destroy = async ({ dividaId }: Request): Promise<AxiosResponse<Response>> => {
    const response = await apiProvaDev.delete<Response>(`divida/${dividaId}`)

    return response;
}