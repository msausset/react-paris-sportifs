import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function User() {
  const { currentUser } = useContext(UserContext);

  // Utilisateur non connecté
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  //Utilisateur connecté

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
