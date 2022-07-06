import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { registerUser } from "../../API/authService";
import Spinner from "../atoms/Spinner/Spinner";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");

  const { loading, isSuccess, errMssg } = useSelector((state) => state.signup);
  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setPassword("");
      setPasswordConf("");
      setErrorMessage("");
      setLastname("");
      setFirstname("");

      navigate("/login");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    errMssg && setErrorMessage(errMssg);
  }, [errMssg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConf) {
      setErrorMessage("Les mots de passe ne se correspondent pas");
      return;
    } else {
      setErrorMessage("");
    }
    dispatch(
      registerUser({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
    );
  };

  return (
    <main className="Main Signup">
      <h1 className="Title Page-Title">Inscription</h1>

      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {!isEmpty(errorMessage) && <p className="Error">{errorMessage}</p>}
        {loading && <Spinner />}
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="lastname">
            Nom
          </label>
          <input
            autoComplete="off"
            className="Input"
            id="lastname"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
            type="text"
            placeholder="Dumas"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="firstname">
            Prénom
          </label>
          <input
            autoComplete="off"
            className="Input"
            id="firstname"
            value={firstname}
            onChange={({ target }) => setFirstname(target.value)}
            type="text"
            placeholder="Alexandre"
            required
          />
        </fieldset>

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

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="passwordconf">
            Confirmation du mot de passe
          </label>
          <input
            autoComplete="off"
            className="Input"
            id="passwordconf"
            value={passwordConf}
            onChange={({ target }) => setPasswordConf(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <button type="submit" className="Button" disabled={loading}>
          S'inscrire
        </button>
      </form>
    </main>
  );
};

export default Signup;
