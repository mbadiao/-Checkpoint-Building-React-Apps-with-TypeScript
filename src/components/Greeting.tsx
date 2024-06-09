import React from "react";

// on cree une interface pour definir les props
interface GreetingProps {
  // on definit le type de la props name
  name: string;
}
// on cree un composant fonctionnel qui prend en parametre les props
// et qui retourne un element react
// le   React.FC signifie que c'est un composant fonctionnel qui prend en parametre les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;
