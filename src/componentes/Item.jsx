import { Link } from 'react-router-dom';

const Item = ( { id, nombre, marca, imagenUrl, idMascota, mascota:{ mascotaNombre }, peso, precio } ) => {
    
    return (
        <div className="box">
            <div id="producto-tienda">
                <div className="head">
                    <h4 className="nombre">{ nombre }</h4>
                    <img src={ imagenUrl } alt={ nombre } className="imagen-producto center" />
                </div>
                <div className="info">
                    <p>
                        <span className="badge bg-dark">
                            { 
                                idMascota === 'KfPcH5jy5Av6dmxdXfGT'
                                ? 'Perro'
                                : ( idMascota === 'ATVYONAxa3gjlp5TYZOn' 
                                    ? 'Gato'
                                    : ( idMascota === 'g5mw3cP9t8IVCUaBlgJK'
                                        ? 'Conejo'
                                        : 'S/D') )
                            }
                         </span>&nbsp; 
                        <span className="badge bg-danger">{ marca }</span>&nbsp; 
                        <span className="badge bg-success">{ peso }</span>
                    </p>
                    <p>
                        $ <span className="precio">{ precio }</span>
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