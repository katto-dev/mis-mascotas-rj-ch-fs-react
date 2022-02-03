const ItemDetail = ({ producto }) => {

    if (producto.img) {
        return (
            <div className="cards">
                <div className="box">
                    <div className="flex-row">
                        
                        <div className="card-content">
                            <div className="flex-col">
                                <div className="card-titulo">
                                    <h3 className="nombre">{producto.nombre}</h3>
                                </div>
                                <div className="card-badge">
                                    <p>
                                        <span className="badge bg-primary">{producto.mascota}</span>&nbsp; 
                                        <span className="badge bg-success">{producto.marca}</span>&nbsp; 
                                        <span className="badge bg-danger">{producto.peso}</span>&nbsp; 
                                        <span className="badge bg-dark">{producto.tipoprod}</span>
                                    </p>
                                </div>
                                <div className="card-descrip">
                                    <p>{producto.descripcion}</p>
                                </div>
                                <div className="card-eventos">
                                    <p>
                                        <strong>{producto.stock}</strong> unidades en stock
                                    </p>
                                    <p>
                                        <a className="bton bton-celeste agregar-producto" href="#" data-id="{producto}">Comprar</a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card-imagen">
                            <img src={producto.img} alt="" className="imagen-producto center" />
                            <p>
                                $ <span className="precio">{producto.precio}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <p className="cargando">... C A R G A N D O ...</p>
        );
    };
}

export default ItemDetail;