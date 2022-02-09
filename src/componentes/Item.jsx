import { Link } from 'react-router-dom';

const Item = ( { id, nombre, marca, imagenUrl, mascota:{ mascotaNombre }, peso, precio } ) => {
    
    return (
        <div className="box">
            <div id="producto-tienda">
                <div className="head">
                    <h4 className="nombre">{ nombre }</h4>
                    <img src={ imagenUrl } alt={ nombre } className="imagen-producto center" />
                </div>
                <div className="info">
                    <p>
                        <span className="badge bg-primary">{ mascotaNombre }</span>&nbsp; 
                        <span className="badge bg-success">{ marca }</span>&nbsp; 
                        <span className="badge bg-danger">{ peso }</span>
                    </p>
                    <p>
                        $ <span className="precio">{ precio }</span>
                    </p>
                    <Link to={`/item/${id}`}>
                        <span className="bton bton-celeste agregar-producto" href="#" data-id="{ id }">Ver detalle</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;