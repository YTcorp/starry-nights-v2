export default function authHeader() {
  const token = localStorage.getItem("token_user");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
