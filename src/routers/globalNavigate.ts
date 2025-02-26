import { NavigateFunction, NavigateOptions } from "react-router-dom";

type GlobalNavigate = {
  navigate?: NavigateFunction;
};

const obj: GlobalNavigate = {};

const registerGlobalNavigate = (cb: NavigateFunction): void => {
  obj.navigate = cb;
};

const globalNavigate = (route: string, options?: NavigateOptions): void => {
  if (obj.navigate) {
    obj.navigate(route, options || undefined);
  } else {
    window.location.href = route;
  }
};

export { registerGlobalNavigate, globalNavigate };
