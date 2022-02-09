import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utilidades/customFetch";
const { productos } = require('../utilidades/productos');

export default function ItemListContainer() {

    const [ datos, setDatos ] = useState( [] );
    const { idMascota } = useParams();

    useEffect(() => {
        customFetch( 2000, productos.filter( producto => {
            // Intercambiabilidad (idMascota)
            if ( idMascota === undefined ) return producto;
            return producto.idMascota === parseInt( idMascota )
        } ) )
            .then( result => setDatos( result ) )
            .catch( err => console.log( err ) )
    }, [ datos ] ); // componentDidUpdate

    return (
        <Row>
            <div id="main-content">
                <ItemList productos={ datos } />
            </div>
        </Row>
    );
}