import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loadStorage } from "../../helpers/localStorage";
import Spinner from "../atoms/Spinner/Spinner";

export default function Profile() {
  const navigate = useNavigate();
  const { detailsLoading } = useSelector((state) => state.userData);
  const userDetails = loadStorage("user_details");

  const { firstname, lastname, email, notification } = userDetails || undefined;

  useEffect(() => {
    if (firstname === undefined) {
      navigate("/");
      // setFirstname(firstname);
      // setLastname(lastname);
      // setEmail(email);
      // setNotification(notification);
    }
  }, [firstname, navigate, userDetails]);

  const [editionMode, setEditionMode] = useState(false);
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [notification, setNotification] = useState(false);
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNotification, setInputNotification] = useState(notification);

  console.log(inputNotification);

  const toggleEditionMode = (e) => {
    e.preventDefault();
    setEditionMode(!editionMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const toggleNotificaton = () => {
    setInputNotification(!inputNotification);
  };

  return (
    <main className="Main Profile">
      <h1 className="Title Page-Title">Profile</h1>
      <div className="Block">
        <form className="Form" onSubmit={handleSubmit}>
          {detailsLoading && <Spinner />}
          <div className="profile-container">
            <fieldset className="Fieldset profile-fields">
              <label htmlFor="firstname" className="Label profile-details">
                Prenom :
              </label>
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
                <p className="profile-details profile-details__text">
                  {firstname}
                </p>
              )}
            </fieldset>
            <fieldset className="Fieldset profile-fields">
              <label htmlFor="lastname" className="Label profile-details">
                Nom :
              </label>
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
                <p className="profile-details profile-details__text">
                  {lastname}
                </p>
              )}
            </fieldset>
            <fieldset className="Fieldset profile-fields">
              <label htmlFor="email" className="Label profile-details">
                E-mail :
              </label>
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
                <p className="profile-details profile-details__text">{email}</p>
              )}
            </fieldset>
            <fieldset className="Fieldset profile-fields">
              <label htmlFor="notification" className="Label profile-details">
                Notifications :
              </label>
              {editionMode ? (
                <input
                  className="Input profile-details profile-details__data"
                  type="checkbox"
                  id="notification"
                  value={inputNotification}
                  checked={inputNotification}
                  onChange={toggleNotificaton}
                />
              ) : (
                <p className="profile-details profile-details__text">
                  {notification && notification.toString()}
                </p>
              )}
            </fieldset>
          </div>
          <div className="Form-Buttons">
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
          </div>
        </form>
      </div>
    </main>
  );
}
