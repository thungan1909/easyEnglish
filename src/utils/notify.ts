import { Id, toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {};

const show = (message: string, options: ToastOptions): Id => {
  try {
    return toast(message, options || defaultOptions);
  } catch (e) {
    console.error("notify.show.fail", e);
    return "";
  }
};

export const notify = {
  info: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...customOptions });
  },
};
