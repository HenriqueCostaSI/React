import React from "react";
import ReactDOM from "react-dom";


import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      {/* <Filho nome="Paulo" />
      <Filho nome="Carla" /> */}
    </Pai>
  </div>,
  document.getElementById("root")
);






/* import Saudacoes from "./componentes/Saudacoes";


ReactDOM.render(
  <div>
    <Saudacoes tipo="Bom dia" nome="Ana" />
  </div>,
  document.getElementById("root")
);
 */


//import  Multi, {  BoaNoite } from "./componentes/Multiplos";


/* ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>,
  document.getElementById("root")
); */
