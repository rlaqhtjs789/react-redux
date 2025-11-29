export const loggerMIddleware = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("action", action);
  return next(action);
};
