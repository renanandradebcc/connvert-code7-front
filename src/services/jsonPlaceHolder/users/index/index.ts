import { AxiosResponse } from 'axios';

import { apiPlaceHolder } from "../../apiPlaceHolder";

import { User } from './types';

export const index = async (): Promise<AxiosResponse<User[]>> => {
    const response = await apiPlaceHolder.get<User[]>("users")

    return response;
}