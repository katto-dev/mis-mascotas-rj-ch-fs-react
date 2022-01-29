import React from "react";
import { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

import customFetch from "../utilidades/customFetch";
const { productos } = require('../utilidades/productos');

export default function ItemListContainer() {

    const alertaCant = (cant) => {
        alert("Ha seleccionado " + cant + " producto/s");
    }

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, productos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
        <Row>
            <div id="main-content">
                <div className="div-content">
                <h2>Catálogo de Productos</h2>
                </div>
                
                <ItemList productos={datos} />
                <ItemCount stock={5} initial={1} onAdd={alertaCant} />
            </div>
        </Row>
    );
}