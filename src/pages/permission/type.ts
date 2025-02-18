import { UrlResponseDataViewModel } from "../../types/dtos/permission.dto";

export type CRUDType = "is_insert" | "is_update" | "is_delete" | "is_select";

export type ScreenInfoDisplay = {
  screen_id: number;
  screen_name: string;
  screen_name_vn: string;
};
export interface UriUIObject {
  id: string;
  code: string;
  value: string;
  name: string;
  crudType: CRUDType;
  screenCode: string;
}

export type URIObjectMapping = {
  [screenCode: string]: {
    [crudType in CRUDType]: UrlResponseDataViewModel[];
  };
};

export type URISelectedMapping = {
  [screenId: number]: {
    [uriId: number]: boolean;
  };
};

export type CRUDBooleanMapping = {
  [screenCode: string]: {
    [crudType in CRUDType]: boolean;
  };
};

export type URIPosition = {
  screenId: number;
  crudType: CRUDType;
  screenName?: string;
  selectedIds?: number[];
} | null;

export type CopyPermissionTreeResult = {
  screenInfosCopy: ScreenInfoDisplay[];
  screensPermissionCopy: CRUDBooleanMapping;
  urisPermissionCopy: URIObjectMapping;
};
