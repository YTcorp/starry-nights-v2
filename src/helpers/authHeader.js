export function authHeader() {
  const token = JSON.parse(localStorage.getItem("user_auth"));
  console.log(token);
  if (token) {
    return { Authorization: `Bearer ${token.token_user}` };
  } else {
    return {};
  }
}
