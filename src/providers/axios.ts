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
import { getPersistToken, persistToken } from "./auth";
import { notify } from "../utils/notify";
import { BASE_URL, ROUTES_CONSTANTS } from "../constants";

// const API_BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
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
    // If request_code exists and does not include "00", reject it
    console.log("Response received:", response);

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

    // if (response.data?.access_token && response.data?.refresh_token) {
    //   persistToken({
    //     accessToken: response.data.access_token,
    //     refreshToken: response.data.refresh_token,
    //   });
    // }
    return response;
  },
  (error: AxiosError): Promise<IHttpError> => {
    switch (error.response?.status) {
      case 401:
        console.log("Unauthenticated 401");
        window.location.href = ROUTES_CONSTANTS.AUTH.LOGIN;
        return Promise.reject();
      case 403:
        console.log("Unauthenticated 403");
        // notify.error(
        //   `403: You don't have permission to access this page ${window.location.pathname}`
        // );
        return Promise.reject();
      default: {
        const errorWrapper: IHttpError = {
          type: "exception",
          code: error.code || "Unknow",
          name: error.name || "Unknow",
          message: error.message,
          description: error.message,
        };
        return Promise.reject(errorWrapper);
      }
    }
  }
);

const getAxiosInstance = (): Axios => axiosInstance;

const getResponseData = <T>(response: AxiosResponse): T => {
  return response.data?.data;
};

const getOrginialResponseData = <T>(response: AxiosResponse): T => {
  return response.data;
};

export { getAxiosInstance, getResponseData, getOrginialResponseData };
