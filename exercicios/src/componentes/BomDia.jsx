import React from "react";

const BomDia = (props) => (
  <React.Fragment>
    <h1>Bom dia, {props.nome}</h1>
    <h2>Até mais, {props.idade}</h2>
  </React.Fragment>
);

/*  const BomDia = (props) => [
        <h1 key='h1'>Bom dia, {props.nome}</h1>,
        <h2 key='h2'>Até mais, {props.idade}</h2>
    ]; */

export default BomDia;
