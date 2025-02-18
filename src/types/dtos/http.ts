export interface IHttpError {
  type: "controlled" | "exception";
  code: string;
  name?: string;
  message: string;
  description: string;
  response_code?: string;
  response_description?: string;
  response_message?: string;
}

export interface IOriginalRequestPayload {
  access_token?: string;
  refresh_token?: string;
  request_id?: string;
  request_date_time?: string;
}

export interface IOriginalResponse {
  refresh_token: string;
  access_token: string;
  request_id: string;
  request_date_time: string;
  request_code: string;
  response_description: string;
  response_message: string;
  response_code: string;
}
