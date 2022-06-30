import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../atoms/Spinner/Spinner";
import { getProfileUser, patchProfileUser } from "../../API/userService";
import EyeIcon from "../atoms/EyeIcon/EyeIcon";

export default function Profile() {
  const dispatch = useDispatch();
  const { detailsLoading, userDetails } = useSelector(
    (state) => state.userData
  );
  const { firstname, lastname, email, notification } = userDetails;
  const [editionMode, setEditionMode] = useState(false);
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNotification, setInputNotification] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [showType, setShowType] = useState(false);

  useEffect(() => {
    dispatch(getProfileUser());
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      setInputFirstname(firstname);
      setInputLastname(lastname);
      setInputEmail(email);
      setInputNotification(notification);
    }
  }, [email, firstname, lastname, notification, userDetails]);

  const toggleEditionMode = (e) => {
    e.preventDefault();
    setEditionMode(!editionMode);
  };

  const toggleNotificaton = () => {
    setInputNotification(!inputNotification);
  };

  const toggleShowType = () => {
    console.log(showType);
    setShowType(!showType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      inputFirstname,
      inputLastname,
      inputEmail,
      inputPassword,
      inputNotification
    );
    dispatch(
      patchProfileUser({
        inputFirstname,
        inputLastname,
        inputEmail,
        inputPassword,
        inputNotification,
      })
    );
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
                  {inputNotification ? inputNotification.toString() : "false"}
                </p>
              )}
            </fieldset>
            {editionMode && (
              <fieldset className="Fieldset profile-fields">
                <label htmlFor="password" className="Label profile-details">
                  Password :
                </label>
                <input
                  className="Input profile-details profile-details__data"
                  id="password"
                  type={!showType ? "password" : "text"}
                  autoComplete="off"
                  onChange={({ target }) => setInputPassword(target.value)}
                  placeholder="*******"
                />
                <EyeIcon funcClic={toggleShowType} showState={showType} />
              </fieldset>
            )}
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
