import React from "react";
import {
  BrowserRouter as Router,
  Routes as RoutesContainer,
  Route,
  Navigate,
} from "react-router-dom";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";

import Header from "../organisms/Header/Header";
import Homepage from "../templates/Homepage";
import Login from "../templates/Login";
import Signup from "../templates/Signup";
import ConstellationsPage from "../templates/ConstellationsPage";
import Footer from "../organisms/Footer/Footer";
import NotFound from "../templates/NotFound";

const Routes = () => {
  return (
    <Router>
      <Header />

      <RoutesContainer>
        <Route path="/" element={<Homepage />} />
        <Route path="/constellations" element={<ConstellationsPage />} />

        {/* Login restricted Routes*/}
        <Route element={<AuthenticatedRoute redirectPath="/login" />}></Route>

        {/* Only non connected Routes */}
        <Route element={<UnauthenticatedRoute redirectPath="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/notfound" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/notfound" />} />
      </RoutesContainer>

      <Footer />
    </Router>
  );
};

export default Routes;
