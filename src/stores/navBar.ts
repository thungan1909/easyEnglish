import { action, makeObservable, observable } from "mobx";
import { IHeaderState } from "../types/headerContext";
import { defaultHeaderStateValue } from "../constants/defaultValue";

export class NavBarStore {
  navBarState: IHeaderState = defaultHeaderStateValue;

  constructor() {
    makeObservable(this, {
      navBarState: observable,
      setNavbarState: action,
      getCurrentNavbarState: action,
    });
  }

  setNavbarState(navBarState: IHeaderState) {
    this.navBarState = navBarState;
  }

  getCurrentNavbarState(): IHeaderState {
    return this.navBarState;
  }
}

const NavBarStoreStore = new NavBarStore();
export default NavBarStoreStore;
