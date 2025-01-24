import { toast } from "react-toastify";

const Toast = {
  success: (message: string) =>
    toast.success(message, {
      hideProgressBar: true,
      className: "lexend",
      autoClose: 500,
    }),
  error: (message: string) =>
    toast.error(message, { hideProgressBar: true, autoClose: 500 }),
  warning: (message: string) =>
    toast.warning(message, { hideProgressBar: true, autoClose: 500 }),
};
export { Toast };
