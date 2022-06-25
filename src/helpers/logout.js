export function logout() {
  localStorage.getItem("user_auth") && localStorage.removeItem("user_auth");
  localStorage.getItem("user_connected") &&
    localStorage.removeItem("user_connected");

  localStorage.getItem("favs_consts") && localStorage.removeItem("favs_consts");
  localStorage.getItem("user_details") &&
    localStorage.removeItem("user_details");
}
