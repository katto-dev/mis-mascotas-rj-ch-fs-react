import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Row } from "react-bootstrap";
import ItemList from "./ItemList";
import customFetch from "../utilidades/customFetch";
const { productos } = require('../utilidades/productos');

export default function ItemListContainer() {

    const [ datos, setDatos ] = useState( [] );
    const { idMascota } = useParams();

    // Simulando el acceso a datos a través de una API
    useEffect(() => {
        customFetch( 2000, productos.filter( producto => {
            // Intercambiabilidad (idMascota)
            if ( idMascota === undefined ) return producto;
            return producto.idMascota === parseInt( idMascota )
        } ) )
            .then( result => setDatos( result ) ) // Cuando la promesa se cumple carga el array en "datos"
            .catch( err => console.log( err ) )
    // Error de renderizado cada x tiempo
    // Fix: hacemos que el render dependa del "idMascota" en vez de "datos"
    }, [ idMascota ] ); // componentDidUpdate

    return (
        <Row>
            <div id="main-content">
                <ItemList productos={ datos } />
            </div>
        </Row>
    );
}