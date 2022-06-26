// import { logout } from "./logout";

const onRequest = (config) => {
  const token = JSON.parse(localStorage.getItem("user_auth"));
  console.log("on interceptors request, token: ", token);
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
  let token = response.headers.authorization;
  if (token) {
    token = JSON.stringify({
      token_user: response.headers.authorization.match(/Bearer\s(.*)/)[1],
    });
  }
  console.log("on interceptors response, token: ", token);
  localStorage.setItem("user_auth", token);
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
