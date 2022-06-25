export function login(res) {
  localStorage.setItem(
    "token_user",
    res.headers.authorization.match(/Bearer\s(.*)/)[1]
  );
  console.log("token user: ", localStorage.getItem("token_user"));
  // mettre ici le contenu du middleware
}
