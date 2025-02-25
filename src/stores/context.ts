import { createContext } from "react";
import { IStoreContext } from "../types/auth/store";
import menuStore from "./menu";
import authStore from "./auth";
import navBarStore from "./navBar";

export const StoreContext = createContext<IStoreContext>({
  authStore,
  navBarStore,
  menuStore,
});
