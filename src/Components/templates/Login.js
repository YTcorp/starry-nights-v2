import React, { useState } from "react";
import getLoginData from "../../store/features/login/getLoginData";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    getLoginData(email, password);
    console.log(getLoginData(email, password));
  };

  return (
    <main className="Main Login">
      <h1 className="Title Page-Title">Connexion</h1>

      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {errorMessage.length > 0 && <p className="Error">{errorMessage}</p>}
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Adresse email
          </label>
          <input
            autocomplete="off"
            className="Input"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="spaceman@universe.com"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Mot de passe
          </label>
          <input
            autocomplete="off"
            className="Input"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <button type="submit" className="Button">
          Se connecter
        </button>
      </form>
    </main>
  );
}
