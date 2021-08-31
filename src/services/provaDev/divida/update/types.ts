import { ResponseApi } from '../../apiProvaDevGlobalTypes';

export interface Request {
    idUsuario: number | string;
    idDivida: number | string;
    motivo: string;
    valor: number;
}

 export type Response = ResponseApi<any>