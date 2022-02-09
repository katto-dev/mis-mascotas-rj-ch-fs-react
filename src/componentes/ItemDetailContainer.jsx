import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row } from "react-bootstrap";
import customFetch from "../utilidades/customFetch";
const { productos } = require('../utilidades/productos');
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ dato, setDato ] = useState( {} );
    const { idProducto } = useParams();

    useEffect( () => {
        customFetch( 2000, productos.find(
            producto => producto.id === parseInt( idProducto )
            ) )
            .then( result => setDato( result ) )
            .catch( err => console.log( err ) )
    }, [] );
    
    return (
        <Row>
            <div id="main-content">
                <ItemDetail producto={ dato } />
            </div>
        </Row>
    );
}

export default ItemDetailContainer;