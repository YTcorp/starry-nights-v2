import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { loginUser } from "../../API/authService";
import Spinner from "../atoms/Spinner/Spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const { loading, isConnected, errMssg } = useSelector((state) => state.login);
  useEffect(() => {
    errMssg && setErrorMessage(errMssg);
  }, [errMssg]);
  console.log(loading, isConnected, errorMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: email, password: password }));

    if (isConnected) {
      return <Navigate to="/" />;
    }
  };

  return (
    <main className="Main Login">
      <h1 className="Title Page-Title">Connexion</h1>

      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {errorMessage.length > 0 && <p className="Error">{errorMessage}</p>}
        {loading && <Spinner />}
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Adresse email
          </label>
          <input
            autoComplete="off"
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
            autoComplete="off"
            className="Input"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <button type="submit" className="Button" disabled={loading}>
          Se connecter
        </button>
      </form>
    </main>
  );
}
