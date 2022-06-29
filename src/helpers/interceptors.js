// import { logout } from "./logout";

const onRequest = (config) => {
  console.log("on interceptors request: ", config);
  let storageData = localStorage.getItem("user_auth");
  const token = JSON.parse(storageData);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token.token_user}`;
  }
  return config;
};

const onRequestError = (error) => {
  console.log("on interceptors request Error, error: ", error);
  return Promise.reject(error);
};

const onResponse = (response) => {
  console.log("on interceptors response:", response);
  let token = response.headers.authorization;
  if (token) {
    const stringToken = JSON.stringify({
      token_user: token.match(/Bearer\s(.*)/)[1],
    });
    localStorage.setItem("user_auth", stringToken);
  }
  return response;
};

const onResponseError = async (error) => {
  console.log("ERROR", error);
  if (error.response) {
    console.log("on interceptors, error");
    if (error.response.status === 401) {
      console.log("on interceptors, error 401");
      //   logout();
      // window.location.href = "login";
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (instance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
  return instance;
};
