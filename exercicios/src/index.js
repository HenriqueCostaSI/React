import React from "react";
import ReactDOM from "react-dom";

import Saudacoes from "./componentes/Saudacoes";


ReactDOM.render(
  <div>
    <Saudacoes tipo="Bom dia" nome="Ana" />
  </div>,
  document.getElementById("root")
);



//import  Multi, {  BoaNoite } from "./componentes/Multiplos";


/* ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>,
  document.getElementById("root")
); */
