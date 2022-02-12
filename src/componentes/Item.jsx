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
                        <span className="badge bg-dark">{ mascotaNombre }</span>&nbsp; 
                        <span className="badge bg-dark">{ marca }</span>&nbsp; 
                        <span className="badge bg-dark">{ peso }</span>
                    </p>
                    <p>
                        $ <span className="precio">{ precio }</span>
                    </p>
                    <Link to={`/item/${id}`}>
                        <button type="button" className="btn btn-primary">DETALLE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;