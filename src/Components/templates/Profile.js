import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUser } from "../../API/userService";
import Spinner from "../atoms/Spinner/Spinner";

export default function Profile() {
  const { userDetails, detailsLoading } = useSelector(
    (state) => state.userData
  );
  const { firstname, lastname, email, role, notification } = userDetails;
  console.log("userDetails", firstname, lastname, email, role, notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileUser());
  }, [dispatch]);

  return (
    <main className="Main Profile">
      <h1 className="Title Page-Title">Profile</h1>
      <div className="Profile-Container">
        {detailsLoading && <Spinner />}
        <p className="Profile-Details">Prenom :</p>
        <p className="Profile-Details">{firstname}</p>
        <p className="Profile-Details">Nom :</p>
        <p className="Profile-Details">{lastname}</p>
        <p className="Profile-Details">E-mail :</p>
        <p className="Profile-Details">{email}</p>
        <p className="Profile-Details">Notifications :</p>
        <p className="Profile-Details">{notification.toString()}</p>
        <button className="Button">Modifier</button>
      </div>
    </main>
  );
}
