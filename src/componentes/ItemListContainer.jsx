import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
    const { idMascota } = useParams();

    //console.log(idMascota);

    // componentDidUpdate
    useEffect(() => {
        customFetch(2000, productos.filter(producto => {
            if (idMascota === undefined) return producto;
            return producto.mascotaId === parseInt(idMascota)
        }))
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