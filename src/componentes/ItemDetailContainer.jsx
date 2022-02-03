import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import customFetch from "../utilidades/customFetch";
const { productos } = require('../utilidades/productos');

import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, productos[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <Row>
            <div id="main-content">
                <div className="div-content">
                    <h2>Detalle del producto</h2>
                </div>
                <ItemDetail producto={dato} />
            </div>
        </Row>
    );
}

export default ItemDetailContainer;