import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Bambu" animal="Dog" breed="California Mountain Dog" />
      <Pet name="Teddy" animal="Dog" breed="Bichon Frise" />
      <Pet name="Damon" animal="Cat" breed="Orange" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
