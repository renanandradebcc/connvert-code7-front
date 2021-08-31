import { AxiosResponse } from 'axios';

import { apiProvaDev } from "../../apiProvaDev";

import { Response, Request } from './types';
 
export const update = async ({ idDivida, idUsuario, motivo, valor }: Request): Promise<AxiosResponse<Response>> => {
    const payload = { idUsuario, motivo, valor }
    const response = await apiProvaDev.put<Response>(`divida/${idDivida}`, payload)

    return response;
}