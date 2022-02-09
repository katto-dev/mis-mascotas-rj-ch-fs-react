import Item from "./Item";

const ItemList = ( { productos } ) => {

    // Intercambiabilidad (productos)
    if ( productos.length > 0 ) {
        return (
            <>
                <div className="div-content">
                    <h5>CATÁLOGO DE PRODUCTOS</h5>
                </div>
                <div className="div-productos cards" id="catalogo-productos">
                    { productos.map( 
                        producto => <Item key={ producto.id } 
                                          id={ producto.id } 
                                          nombre={ producto.nombre } 
                                          marca={ producto.marca } 
                                          imagenUrl={ producto.imagenUrl } 
                                          idMascota={ producto.idMascota } 
                                          mascota={ producto.mascota } 
                                          tipo={ producto.tipo } 
                                          peso={ producto.peso } 
                                          precio={ producto.precio } 
                                          stock={ producto.stock } />
                    ) }
                </div>
            </>
        );
    } else {
        return (
            <p className="cargando">... C A R G A N D O ...</p>
        );
    };

}

export default ItemList;