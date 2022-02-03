import Item from "./Item";

const ItemList = ({ productos }) => {

    if (productos.length > 0) {
        return (
            <div className="div-productos cards" id="catalogo-productos">
                {
                    productos.map(item => <Item key={item.id} nombre={item.nombre} marca={item.marca} img={item.img} mascota={item.mascota} tipoprod={item.tipoprod} peso={item.peso} precio={item.precio} stock={item.stock} />)
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