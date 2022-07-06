import isEmpty from "lodash/isEmpty";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../API/authService";
import Spinner from "../atoms/Spinner/Spinner";
import InputIcon from "../molecules/Input/InputIcon";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { loading, errMssg } = useSelector((state) => state.login);

  useEffect(() => {
    errMssg && setErrorMessage(errMssg);
  }, [errMssg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: email, password: password }));
  };

  return (
    <main className="Main Login">
      <h1 className="Title Page-Title">Connexion</h1>

      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {!isEmpty(errorMessage) && <p className="Error">{errorMessage}</p>}
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
            placeholder="user@email.com"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Mot de passe
          </label>
          <InputIcon id="password" onChange={setPassword} required={true} />
        </fieldset>

        <button type="submit" className="Button" disabled={loading}>
          Se connecter
        </button>
      </form>
    </main>
  );
}
