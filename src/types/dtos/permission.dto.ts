export interface PermissionConfigurationRequestDTO {
  is_select: boolean;
  is_insert: boolean;
  is_update: boolean;
  is_delete: boolean;
  role_id: number;
  screen_id: number;
  uri_ids: number[];
}

export interface PermissionInquiryRequestDTO {
  role_code: string;
}

export interface UrlResponseDataViewModel {
  id: number;
  description: string;
  is_checked: boolean;
  adapter_in_name: string;
}

export interface PermissionInquiryResponseViewModel {
  is_select: boolean;
  is_insert: boolean;
  is_update: boolean;
  is_delete: boolean;
  screen_id: number;
  screen_code: string;
  screen_name: string;
  screen_name_vn: string;
  selects: UrlResponseDataViewModel[];
  inserts: UrlResponseDataViewModel[];
  updates: UrlResponseDataViewModel[];
  deletes: UrlResponseDataViewModel[];
}
