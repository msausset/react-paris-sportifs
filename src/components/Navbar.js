import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Navbar = () => {
  const { toggleModals, currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "Une erreur est survenue lors de la déconnexion, veuillez réessayer"
      );
    }
  };
  if (!currentUser) {
    return (
      <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className="navbar-brand">
          Bet4Free
        </Link>
        <div>
          <button
            onClick={() => toggleModals("signIn")}
            className="btn btn-primary ms-2"
          >
            Se connecter
          </button>
          <button
            onClick={() => toggleModals("signUp")}
            className="btn btn-primary ms-2"
          >
            S'inscrire
          </button>
          <button onClick={logOut} className="btn btn-danger ms-2">
            Se déconnecter
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className="navbar-brand">
          Bet4Free
        </Link>
        <div>
          <button onClick={logOut} className="btn btn-danger ms-2">
            Se déconnecter
          </button>
        </div>
      </nav>
    );
  }
};

export default Navbar;
