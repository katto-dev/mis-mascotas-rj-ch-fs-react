import { useContext } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { CartContext } from "../contexto/CartContext";

export default function Cart() {
    // Usamos el contexto
    const carrito = useContext( CartContext );

    return (
        <Row>
            <div id="main-content">
                <div className="div-content">
                    <h5>TU CARRITO</h5>
                </div>
                <div className="div-content">
                    <div className="d-flex row align-items-center">
                                        
                        <div className="d-flex justify-content-left col-6">
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">CONTINUAR COMPRANDO</button>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-end col-6">
                            {
                                carrito.cartList.length > 0
                                ? <button type="button" className="btn btn-danger" onClick={ carrito.clearCart }>ELEMINAR LOS PRODUCTOS</button>
                                : <div className="div-content"><p><strong>C A R R I T O &nbsp; &nbsp; V A C I O ! ! !</strong></p></div>
                            }
                        </div>
                    </div>
                </div>
                <div className="div-content">
                    <div id="contenedor-carrito">
                        {
                            carrito.cartList.length > 0 
                            ? carrito.cartList.map( item => 
                                <div className="d-flex row align-items-center" key={ item.itemId }>
                                    
                                    <div className="d-flex justify-content-center col-2">
                                        <img src={ item.itemImagen } alt="" className="imagen-carrito" width="50" />
                                    </div>
                                    <div className="d-flex justify-content-center col-4">
                                        <h5>{ item.itemNombre }</h5>
                                    </div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p>
                                            <span className="cantidad-producto">{ item.itemCant }</span> uds
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p>$ <span className="precio-carrito">{ item.itemPrecio }</span></p>
                                    </div>
                                    <div className="d-flex justify-content-center col-2">
                                        <button type="button" className="btn btn-dark borrar-producto" onClick={ () => carrito.removeItem( item.itemId ) }>ELIMINAR</button>
                                    </div>
                                </div>
                            )
                            : <span></span>
                        }
                        
                    </div>

                    <div id="pago-carrito"></div>
                    <div id="comprar-boton-carrito"></div>
                    <div id="vaciar-boton-carrito"></div>
                </div>
            </div>
        </Row>
    );
}