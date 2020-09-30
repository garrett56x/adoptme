import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bambu",
      animal: "Dog",
      breed: "California Mountain Dog",
    }),
    React.createElement(Pet, {
      name: "Teddy",
      animal: "Dog",
      breed: "Bichon Frise",
    }),
    React.createElement(Pet, {
      name: "Damon",
      animal: "Cat",
      breed: "Orange",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
