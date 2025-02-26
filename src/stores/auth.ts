import { action, makeObservable, observable } from "mobx";
import { getUserFromCache } from "../utils/persistCache/auth";
import { ICurrentUser } from "../types/auth/user";

export class AuthStore {
  currentUser: ICurrentUser | null = null;

  // password is older than 90 days or not
  shouldChangePassword: boolean | null = null;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      getCurrentUser: action,
    });

    const userInfoFromCache = getUserFromCache();
    this.setCurrentUser(userInfoFromCache);
  }

  setCurrentUser(userInfo: ICurrentUser | null) {
    console.log("userInfo", userInfo);
    this.currentUser = userInfo;
  }

  getCurrentUser(): ICurrentUser | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!Object.keys(this.currentUser || {}).length;
  }

  setRequiredChangePassword(required: boolean | null) {
    this.shouldChangePassword = required;
  }

  isShouldChangePassword(): boolean {
    return !!this.shouldChangePassword;
  }
}

const authStore = new AuthStore();
export default authStore;
