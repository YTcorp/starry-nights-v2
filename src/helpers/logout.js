export function logout() {
  localStorage.getItem("user_auth") && localStorage.removeItem("user_auth");
  localStorage.getItem("user_connected") &&
    localStorage.removeItem("user_connected");
}
