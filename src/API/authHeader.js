export default function authHeader() {
  const token = localStorage.getItem("token_user");
  console.log(token);
  if (token) {
    console.log("token indeed");
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
