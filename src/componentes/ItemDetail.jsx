import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../contexto/CartContext';

const ItemDetail = ( { producto } ) => {

    const [ itemCount, setItemCount ] = useState( 0 );
    const carrito = useContext(CartContext);

    const onAdd = ( cant ) => {
        alert( "Seleccionaste " + cant + " uds del producto para agregar al carrito." );
        setItemCount( cant );
        carrito.addToCart(producto, cant);
    }

    if ( producto.nombre ) {
        return (
            <>
                <div className="div-content">
                    <h5>DETALLE DEL PRODUCTO</h5>
                </div>
                <div className="cards">
                    <div className="box">
                        <div className="flex-row">
                            
                            <div className="card-content">
                                <div className="flex-col">
                                    <div className="card-titulo">
                                        <h3 className="nombre">{ producto.nombre }</h3>
                                    </div>
                                    <div className="card-badge">
                                        <p>
                                            <span className="badge bg-dark">{ producto.mascota.mascotaNombre }</span>&nbsp; 
                                            <span className="badge bg-dark">{ producto.marca }</span>&nbsp; 
                                            <span className="badge bg-dark">{ producto.peso }</span>&nbsp; 
                                            <span className="badge bg-dark">{ producto.tipo }</span>
                                        </p>
                                    </div>
                                    <div className="card-descrip">
                                        <p>{ producto.descripcion }</p>
                                    </div>
                                    <div className="card-eventos">
                                        <p><span className="stock">{ producto.stock }</span> uds en stock</p>
                                        <p>
                                            {
                                                // Intercambiabilidad (itemCount)
                                                itemCount === 0
                                                    ? <ItemCount stock={ producto.stock } 
                                                                 initial={ itemCount } 
                                                                 onAdd={ onAdd } />
                                                    : <Link to='/cart'>
                                                          <button type="button" className="btn btn-success">C H E C K O U T</button>
                                                      </Link>
                                            }
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="card-imagen">
                                <img src={ producto.imagenUrl } alt={ producto.nombre } className="imagen-producto center" />
                                <p>
                                    $ <span className="precio">{ producto.precio }</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="div-content">
                        <h5>DETALLE DEL PRODUCTO</h5>
                    </div>
                <div className="spinner-border m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                {/* <p className="cargando">... C A R G A N D O ...</p> */}
            </>
        );
    };
}

export default ItemDetail;