import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {

  const alertaCant = (cant) =>{
    alert("Ha seleccionado " + cant + " producto/s");
  }

  return (
    <div id="main-content">
        <h3>Listado de Articulos</h3>
        <br />
        <ItemCount stock={5} initial={1} onAdd={alertaCant} />
    </div>
  );
}