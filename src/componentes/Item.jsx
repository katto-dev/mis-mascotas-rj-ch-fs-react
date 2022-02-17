import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ( { id, nombre, marca, imagenUrl, idMascota, mascota:{ mascotaNombre }, peso, precio, stock } ) => {
    
    return (
        <div className="box">
            <div id="producto-tienda">
                <div className="head">
                    <h4 className="nombre">{ nombre }</h4>
                    <img src={ imagenUrl } alt={ nombre } className="imagen-producto center" />
                </div>
                <div className="info">
                    <p>
                        { 
                            idMascota === 'KfPcH5jy5Av6dmxdXfGT'
                            ? <span className="badge bg-primary">Perro</span>
                            : ( idMascota === 'ATVYONAxa3gjlp5TYZOn' 
                                ? <span className="badge bg-success">Gato</span>
                                : ( idMascota === 'g5mw3cP9t8IVCUaBlgJK'
                                    ? <span className="badge bg-danger">Conejo</span>
                                    : <span className="badge bg-secondary">********</span> ) )
                        }
                    </p>
                    <p>
                        Stock: <span className="stock">{ stock }</span> unid.
                    </p>
                    <p>
                        Precio: $ <span className="precio">{ precio }</span>
                    </p>
                    <Link to={`/item/${id}`}>
                        <button type="button" className="btn btn-info text-dark">DETALLE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;