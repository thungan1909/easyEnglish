import { action, makeObservable, observable } from "mobx";
import { RouteMenuItem } from "../types/route";

export class MenuStore {
  menuStructure: RouteMenuItem[] = [];

  constructor() {
    makeObservable(this, {
      menuStructure: observable,
      setMenuStructure: action,
    });
  }

  setMenuStructure(data: RouteMenuItem[]) {
    this.menuStructure = data;
  }
}

const menuStore = new MenuStore();
export default menuStore;
