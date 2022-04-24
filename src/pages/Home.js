import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return (
      <div className="container p-5">
        <h1 className="display-3 text-light text-center">
          Bienvenue sur Bet4Free
        </h1>
        <div className="container p-5">
          <p class="text-right text-light fs-5">
            Bet4Free est une application de paris sportifs totalement gratuite
            qui vous permet de miser de l'argent virtuel sur des matchs de
            football. Chaque utilisateur commence avec 10.000 BC (Bet Coins),
            vous pouvez les utiliser comme bon vous semble sur l'ensemble des
            matchs répertoriés. Lorsque vous n'avez plus de BC, vous récupérez
            automatiquement 10.000 BC réutilisables immédiatement. Alors
            inscrivez-vous sans plus tarder sur Bet4Free pour commencer à parier
            sans avoir peur de faire banqueroute !
          </p>

          <p class="text-center text-light fs-5">Bonne chance =)</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container p-5">
        <h1 className="display-3 text-light text-center">Tu es connecté :)</h1>
      </div>
    );
  }
};

export default Home;
