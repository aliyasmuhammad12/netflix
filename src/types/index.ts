import { AxiosRequestConfig, AxiosResponse } from "axios";


export interface AxiosErrorType{
    code?: string;
    message: string;
    config: AxiosRequestConfig;
    name: string;
    request?: XMLHttpRequest;
    response?: AxiosResponse;
    status?: number;
    stack?: string;
}

export interface RequestError extends Error {
    status?: number;
    details?: unknown;
}

export interface ApiResponse<T>{
    data?: T;
    error : RequestError | undefined;
}