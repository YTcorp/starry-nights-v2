export function logout() {
  localStorage.getItem("token_user") && localStorage.removeItem("token_user");
  localStorage.getItem("userConnected") &&
    localStorage.removeItem("userConnected");
}
