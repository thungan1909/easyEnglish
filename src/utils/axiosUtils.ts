import { AxiosRequestConfig } from "axios";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";

const createGetByIdQuery = <TResponse>(url: string) => ({
  fn: async (id: string): Promise<TResponse> => {
    const finalUrl = url.replace(":id", id);
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().get(finalUrl)
    );
  },
});

const createGetQuery = <TResponse>(url: string) => ({
  fn: async (): Promise<TResponse> => {
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().get(url)
    );
  },
});

const createPostMutation = <TRequest, TResponse>(
  url: string,
  config?: AxiosRequestConfig
) => ({
  fn: async (data: TRequest): Promise<TResponse> =>
    getOriginalResponseData<TResponse>(
      await getAxiosInstance().post(url, data, config)
    ),
});

const createPutWithIdMutation = <TRequest, TResponse>(
  url: string,
  config?: AxiosRequestConfig
) => ({
  fn: async (data: TRequest, id?: string): Promise<TResponse> => {
    const finalUrl = id ? url.replace(":id", id) : url;
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().put(finalUrl, data, config)
    );
  },
});

const createPatchMutation = <TRequest, TResponse>(url: string) => ({
  fn: async (data: TRequest): Promise<TResponse> =>
    getOriginalResponseData<TResponse>(
      await getAxiosInstance().patch(url, data)
    ),
});

const createDeleteMutation = <TId extends string, TResponse>(url: string) => ({
  fn: async (id: TId): Promise<TResponse> => {
    const finalUrl = url.replace(":id", id);
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().delete(finalUrl)
    );
  },
});

const createGetWithQueryArray = <TResponse>(
  url: string,
  queryParam: string
) => ({
  fn: async (ids: string[]): Promise<TResponse> => {
    const query = ids.join(",");
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().get(`${url}?${queryParam}=${query}`)
    );
  },
});

export {
  createGetByIdQuery,
  createGetQuery,
  createGetWithQueryArray,
  createPostMutation,
  createPutWithIdMutation,
  createPatchMutation,
  createDeleteMutation,
};
