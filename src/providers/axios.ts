import axios, {
  Axios,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import {
  IHttpError,
  IOriginalRequestPayload,
  IOriginalResponse,
} from "../types/dtos/http";
import { getPersistToken } from "./auth";

const axiosInstance = axios.create({
  // baseURL: BASE_URL, //local
  baseURL: import.meta.env.VITE_API_URL,//Deploy: Update use VITE_API_URL
  headers: {
    "Content-Type": "application/json",
    ...(import.meta.env.PROD && {
      apiKey: import.meta.env.VITE_GATEWAY_KEY,
    }),
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<IOriginalRequestPayload>) => {
    const { accessToken, refreshToken } = getPersistToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    const metaData: IOriginalRequestPayload = accessToken
      ? {
          access_token: accessToken,
          refresh_token: refreshToken,
          request_id: "string",
          request_date_time: "string",
        }
      : {};

    config.data = { ...metaData, ...(config.data || {}) };
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<IOriginalResponse>) => {
    if (
      response?.data?.request_code &&
      !response?.data?.request_code?.includes("00")
    ) {
      const errorWrapper: IHttpError = {
        type: "controlled",
        code: response.data.response_code,
        description: response.data.response_description,
        message: response.data.response_message,
      };
      return Promise.reject(errorWrapper);
    }

    return response;
  },
  (error: AxiosError): Promise<IHttpError> => {
    const errorData = error.response?.data as AxiosError | undefined;

    const errorWrapper: IHttpError = {
      type: "exception",
      code: errorData?.code || error.code || "Unknow",
      name: error.name || "Unknown",
      message: errorData?.message || error.message || "Unknown error",
      description:
        errorData?.message || error.message || "No response from server",
    };
    switch (error.response?.status) {
      case 401:
        return Promise.reject(errorWrapper);
      case 403:
        return Promise.reject(errorWrapper);
      default: {
        return Promise.reject(errorWrapper);
      }
    }
  }
);

const getAxiosInstance = (): Axios => axiosInstance;

const getResponseData = <T>(response: AxiosResponse): T => {
  return response.data?.data;
};

const getOriginalResponseData = <T>(response: AxiosResponse): T => {
  return response.data;
};

export { getAxiosInstance, getResponseData, getOriginalResponseData };
