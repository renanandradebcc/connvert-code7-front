import { ResponseApi } from '../../apiProvaDevGlobalTypes';

export interface Request {
    idUsuario: number;
    motivo: string;
    valor: number;
}

 export type Response = ResponseApi<string>