import React from "react";
import Filho from "./Filho";

export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h2>Filhos</h2>
    <ul>
      {React.Children.map(props.children, (filho) => {
        return React.cloneElement(filho, { ...props, ...filho.props });
      })}
    </ul>
  </div>
);

/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
        
        <Filho {...props}/>
    
        <Filho {...props} nome="Carla" />
     */
