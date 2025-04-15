import {
  getAxiosInstance,
  getOriginalResponseData,
} from "../../providers/axios";

const createPostMutation = <TRequest, TResponse>(url: string) => ({
  fn: async (data: TRequest): Promise<TResponse> =>
    getOriginalResponseData<TResponse>(
      await getAxiosInstance().post(url, data)
    ),
});

const createPutMutation = <TRequest, TResponse>(
  url: string,
  getId?: (data: any) => string
) => ({
  fn: async (data: TRequest, id?: string): Promise<TResponse> => {
    const finalUrl = getId ? url.replace(":id", getId(data)) : url;
    return getOriginalResponseData<TResponse>(
      await getAxiosInstance().put(finalUrl, data)
    );
  },
});

export { createPostMutation, createPutMutation };
