import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfileUser } from "../../API/userService";
import Spinner from "../atoms/Spinner/Spinner";

export default function Profile() {
  const navigate = useNavigate();
  const { isConnected } = useSelector((state) => state.login);
  const { detailsLoading, userDetails } = useSelector(
    (state) => state.userData
  );
  const [editionMode, setEditionMode] = useState(false);
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNotification, setInputNotification] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("on profile", isConnected);
    if (isConnected) {
      dispatch(getProfileUser());
    } else {
      navigate("/login");
    }
  }, [isConnected, navigate, dispatch]);

  useEffect(() => {
    console.log(userDetails);
    if (userDetails !== undefined) {
      const { firstname, lastname, email, notification } = userDetails;
      setInputFirstname(firstname);
      setInputLastname(lastname);
      setInputEmail(email);
      setInputNotification(notification);
    }
  }, [navigate, userDetails]);

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
                  value={inputFirstname}
                  onChange={({ target }) => setInputFirstname(target.value)}
                  placeholder={inputFirstname}
                />
              ) : (
                <p className="profile-details profile-details__text">
                  {inputFirstname}
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
                  value={inputLastname}
                  onChange={({ target }) => setInputLastname(target.value)}
                  placeholder={inputLastname}
                />
              ) : (
                <p className="profile-details profile-details__text">
                  {inputLastname}
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
                  value={inputEmail}
                  onChange={({ target }) => setInputEmail(target.value)}
                  placeholder={inputEmail}
                />
              ) : (
                <p className="profile-details profile-details__text">
                  {inputEmail}
                </p>
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
                  {inputNotification && inputNotification.toString()}
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
