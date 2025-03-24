import { Id, toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right",
  theme: "colored",
  type: "default",
  autoClose: 5000,
};

const infoOptions: ToastOptions = {
  ...defaultOptions,
  type: "info",
};

const successOptions: ToastOptions = {
  ...defaultOptions,
  type: "success",
};

const warningOptions: ToastOptions = {
  ...defaultOptions,
  type: "warning",
};

const errorOptions: ToastOptions = {
  ...defaultOptions,
  type: "error",
};

const show = (message: string, options: ToastOptions): Id => {
  try {
    return toast(message, {
      ...options,
      style: {
        fontFamily: "var(--font-family) !important",
      },
    });
  } catch (e) {
    console.error("notify.show.fail", e);
    return "";
  }
};

export const notify = {
  info: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...infoOptions, ...customOptions });
  },
  success: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...successOptions, ...customOptions });
  },
  warning: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...warningOptions, ...customOptions });
  },
  error: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...errorOptions, ...customOptions });
  },
  default: (message: string, customOptions?: ToastOptions): Id => {
    return show(message, { ...defaultOptions, ...customOptions });
  },
};
