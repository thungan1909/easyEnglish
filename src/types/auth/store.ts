import { AuthStore } from "../../stores/auth";
import { MenuStore } from "../../stores/menu";
import { NavBarStore } from "../../stores/navBar";

export interface IStoreContext {
  authStore: AuthStore;
  navBarStore: NavBarStore;
  menuStore: MenuStore;
}
