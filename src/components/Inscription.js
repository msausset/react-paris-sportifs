import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  // Push des éléments renseignés

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  // Validation du formulaire

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères minimum");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe sont différents  !");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      toggleModals("close");
      navigate("/user/profil");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Adresse mail invalide !");
      }

      if (err.code === "auth/email-already-in-use") {
        setValidation("Un compte existe déjà avec cette adresse mail");
      }
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => toggleModals("close")}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">S'inscrire</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Adresse mail
                      </label>
                      <input
                        ref={addInputs}
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        type="password"
                        name="pwd"
                        required
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Confirmer le mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        type="password"
                        name="email"
                        required
                        className="form-control"
                        id="confirmationPwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">Valider</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
