export function login(res) {
  const user = JSON.stringify({
    token_user: res.headers.authorization.match(/Bearer\s(.*)/)[1],
  });

  localStorage.setItem("user_auth", user);
}
