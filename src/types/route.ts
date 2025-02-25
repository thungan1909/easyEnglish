import { ReactNode } from "react";

export interface RouteItem {
  path: string;
  child?: RouteItem[];
  element: ReactNode;
}

export interface RouteMenuItem {
  id: string;
  label: string;
  routePath: string;
  child?: RouteMenuItem[];
  path: string;
  permission?: string[];
  element: ReactNode;
}
