import { ResponseApi } from '../../apiProvaDevGlobalTypes';

export interface Divida {
    _id: string;
    motivo: string;
    valor: number;
    idUsuario: number;
    uuid: string;
    criado: string;
    __v: number;
  } 

export type Response = ResponseApi<Divida[]>