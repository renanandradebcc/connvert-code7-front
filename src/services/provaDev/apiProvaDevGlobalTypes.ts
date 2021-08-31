export interface ResponseApi<T> {
    success: boolean;
    message: string;
    result: T;
  }