import { AxiosResponse } from 'axios';

import { apiProvaDev } from "../../apiProvaDev";

import { Response } from './types';
 
export const index = async (): Promise<AxiosResponse<Response>> => {
    const response = await apiProvaDev.get<Response>("divida")

    return response;
}