import Item from "./Item";

const ItemList = ({ productos }) => {

    if (productos.length > 0) {
        return (
            <div className="div-productos cards" id="catalogo-productos">
                {
                    productos.map(producto => <Item key={producto.id} id={producto.id} nombre={producto.nombre} marca={producto.marca} img={producto.img} mascotaId={producto.mascotaId} mascota={producto.mascota} tipoprod={producto.tipoprod} peso={producto.peso} precio={producto.precio} stock={producto.stock} />)
                }
            </div>
        );
    } else {
        return (
            <p className="cargando">... C A R G A N D O ...</p>
        );
    };

}

export default ItemList;