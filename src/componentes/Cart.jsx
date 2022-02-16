import { useContext } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { CartContext } from "../contextos/CartContext";

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
                                <button type="button" className="btn btn-info text-dark">CONTINUAR COMPRANDO</button>
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
                            && carrito.cartList.map( item => 
                                <div className="d-flex row align-items-center carrito-item rounded" key={ item.itemId }>
                                    
                                    <div className="d-flex justify-content-center col-2">
                                        <img src={ item.itemImagen } alt="" className="imagen-carrito" width="50" />
                                    </div>
                                    <div className="d-flex justify-content-center col-5">
                                        <h5>{ item.itemNombre }</h5>
                                    </div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p>
                                            <span className="cantidad-producto">{ item.itemCant }</span> uds<br /> $ <span className="cantidad-producto">{ item.itemPrecio }</span> c/u
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end col-2">
                                        <p></p>
                                        <p>$ <span className="precio-carrito">{ carrito.calcTotalItem( item.itemId ) }</span></p>
                                    </div>
                                    <div className="d-flex justify-content-start col-1">
                                    <button type="button" className="btn btn-danger borrar-producto" onClick={ () => carrito.removeItem( item.itemId ) }>X</button>
                                    </div>
                                </div> 
                            )
                        }
                        {
                            carrito.cartList.length > 0 
                            && <div className="d-flex row align-items-center carrito-total rounded">
                                    <div className="d-flex justify-content-center col-2"></div>
                                    <div className="d-flex justify-content-center col-5"></div>
                                    <div className="d-flex justify-content-center col-2">
                                        <p><span className="precio-carrito">TOTAL</span></p>
                                    </div>
                                    <div className="d-flex justify-content-end col-2">
                                    <p>$ <span className="precio-carrito">{ carrito.calcTotalCart() }</span></p>
                                    </div>
                                    <div className="d-flex justify-content-start col-1"></div>
                                </div>
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