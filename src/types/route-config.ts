import { CRUDEnum } from "./enum/crud";

export type RoutePermissionConfig =
  | boolean
  | {
      screenCode: string;
      crudType: CRUDEnum[];
    };

interface RouteItemBase {
  path: string;
  element?: React.ReactNode;
  sidebarProps?: {
    displayText: string;
    icon?: React.ReactNode;
  };
  showWithPermission: RoutePermissionConfig;
  groupName?: string;
  child?: RouteItemBase[];
  disabled?: boolean;
}

export type RouteItemConfig = RouteItemBase;
