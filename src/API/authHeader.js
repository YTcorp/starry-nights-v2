export function authHeader() {
  const token = localStorage.getItem("token_user");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

export function response401(error) {
  if (error.response.status === 401) {
    localStorage.removeItem("token_user");
    localStorage.removeItem("userConnected");
  }
}
