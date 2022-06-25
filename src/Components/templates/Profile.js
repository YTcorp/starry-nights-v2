import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Spinner from "../atoms/Spinner/Spinner";

export default function Profile() {
  const navigate = useNavigate();
  const { userDetails, detailsLoading, detailsSuccess } = useSelector(
    (state) => state.userData
  );
  console.log("on profile detailSuccess", detailsSuccess);

  useEffect(() => {
    if (userDetails !== undefined && userDetails !== null) {
      const { firstname, lastname, email, notification } = userDetails;
      setFirstname(firstname);
      setLastname(lastname);
      setEmail(email);
      setNotification(notification);
    } else {
      navigate("/");
    }
  }, [navigate, userDetails]);

  const [editionMode, setEditionMode] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(false);
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNotification, setInputNotification] = useState(false);

  const toggleEditionMode = (e) => {
    e.preventDefault();
    setEditionMode(!editionMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <main className="Main Profile">
      <h1 className="Title Page-Title">Profile</h1>
      <form className="Form Block profile-container" onSubmit={handleSubmit}>
        {detailsLoading && <Spinner />}
        <fieldset className="Fieldset">
          <label className="Label profile-details">Prenom :</label>
          {editionMode ? (
            <input
              autoComplete="off"
              className="Input profile-details profile-details__data"
              id="firstname"
              value={firstname}
              onChange={({ target }) => setInputFirstname(target.value)}
              placeholder={firstname}
            />
          ) : (
            <p className="profile-details profile-details__data">{firstname}</p>
          )}
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label profile-details">Nom :</label>
          {editionMode ? (
            <input
              className="Input profile-details profile-details__data"
              id="lastname"
              autoComplete="off"
              value={lastname}
              onChange={({ target }) => setInputLastname(target.value)}
              placeholder={lastname}
            />
          ) : (
            <p className="profile-details profile-details__data">{lastname}</p>
          )}
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label profile-details">E-mail :</label>
          {editionMode ? (
            <input
              className="Input profile-details profile-details__data"
              id="email"
              autoComplete="off"
              value={email}
              onChange={({ target }) => setInputEmail(target.value)}
              placeholder={email}
            />
          ) : (
            <p className="profile-details profile-details__data">{email}</p>
          )}
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label profile-details">Notifications :</label>
          {editionMode ? (
            <input
              className="Input profile-details profile-details__data"
              type="checkbox"
              value={notification}
              onChange={({ target }) => setInputNotification(target.value)}
            />
          ) : (
            <p className="profile-details profile-details__data">
              {notification && notification.toString()}
            </p>
          )}
        </fieldset>
        {editionMode ? (
          <>
            <button
              className="Button Button-Annuler"
              onClick={toggleEditionMode}
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={detailsLoading}
              className="Button Button-Valider"
            >
              Valider
            </button>
          </>
        ) : (
          <>
            <button className="Button" onClick={toggleEditionMode}>
              Modifier
            </button>
          </>
        )}
      </form>
    </main>
  );
}
