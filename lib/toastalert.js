let toastyFn = null;

export const setToastAlertFunction = (fn) => {
  toastyFn = fn;
};

export const toastify = {
  success: (title, message) => {
    if (toastyFn) toastyFn("success", title, message);
  },
  error: (title, message) => {
    if (toastyFn) toastyFn("error", title, message);
  },
  info: (title, message) => {
    if (toastyFn) toastyFn("info", title, message);
  },
};
