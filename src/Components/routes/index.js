import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Header from "../organisms/Header/Header";
import Homepage from "../templates/Homepage";
import Login from "../templates/Login";
import Signup from "../templates/Signup";
import Profile from "../templates/Profile";
import MyConstellations from "../templates/MyConstellations";
import MyPlaces from "../templates/MyPlaces";
import ConstellationsPage from "../templates/ConstellationsPage";
import Footer from "../organisms/Footer/Footer";
import NotFound from "../templates/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/constellations" element={<ConstellationsPage />} />

        {/* Login restricted Routes*/}
        <Route element={<AuthenticatedRoute redirectPath="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/mes-constellations" element={<MyConstellations />} />
          <Route path="/mes-lieux-preferes" element={<MyPlaces />} />
        </Route>

        {/* Only non connected Routes */}
        <Route element={<UnauthenticatedRoute redirectPath="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/notfound" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
