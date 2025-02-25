import { useContext } from "react";
import { IStoreContext } from "../types/auth/store";
import { StoreContext } from "../stores/context";

export const useStore = (): IStoreContext => {
  const rootStore: IStoreContext = useContext(StoreContext);
  return rootStore;
};
