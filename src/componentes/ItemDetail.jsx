import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ( { producto } ) => {

    const [ itemCount, setItemCount ] = useState( 0 );

    const onAdd = ( cant ) => {
        alert( "Seleccionaste " + cant + " uds del producto para agregar al carrito." );
        setItemCount( cant );
    }

    if ( producto.nombre ) {
        return (
            <>
                <div className="div-content">
                    <h5>DETALLE DEL PRODUCTO SELECCIONADO</h5>
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
                                            <span className="badge bg-primary">{ producto.mascota.mascotaNombre }</span>&nbsp; 
                                            <span className="badge bg-success">{ producto.marca }</span>&nbsp; 
                                            <span className="badge bg-danger">{ producto.peso }</span>&nbsp; 
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
                                                          <button type="button" className="bton bton-fucsia">Checkout</button>
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
            <p className="cargando">... C A R G A N D O ...</p>
        );
    };
}

export default ItemDetail;