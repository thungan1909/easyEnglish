import { ICurrentUser } from "../types/auth/user";
import { saveUserToCache } from "../utils/persistCache/auth";
import { setAccessToken } from "../utils/persistCache/token";
import { useStore } from "./useStore";

interface IUseAuth {
  //   authenticated: boolean;
  //   currentUser: ICurrentUser | null;
  //   logout: () => void;
  login: (
    user: ICurrentUser,
    accessToken: string,
    requiredChangePassword?: boolean
  ) => void;
  //   updateUserInfo: (user: ICurrentUser) => void;
  updateToken: (accessToken: string) => void;
  // password is older than 90 days or not
  //   shouldChangePassword: boolean;
  //   clearShouldChangePassword: () => void;
}

export const useAuth = (): IUseAuth => {
  const { authStore } = useStore();

  const login = (user: ICurrentUser, accessToken: string) => {
    authStore.setCurrentUser(user);
    // authStore.setRequiredChangePassword(requiredChangePassword || null);
    saveUserToCache(user);
    setAccessToken(accessToken);
  };

  const updateToken = (accessToken: string) => {
    console.log("accessToken", accessToken);
    setAccessToken(accessToken);
  };

  return {
    login,
    updateToken,
  };
};
