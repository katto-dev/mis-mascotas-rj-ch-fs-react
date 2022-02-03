const Item = ({ nombre, marca, img, mascota, tipoprod, peso, precio, stock }) => {
    return (
        <div className="box">
            <div id="producto-tienda">
                <div className="head">
                    
                    <h4 className="nombre">{nombre}</h4>
                    <img src={img} alt="" className="imagen-producto center" />
                </div>
                <div className="info">
                    <p>
                        <span className="badge bg-primary">{mascota}</span> <span className="badge bg-success">{marca}</span> <span className="badge bg-danger">{peso}</span>
                    </p>
                    <p>
                        $ <span className="precio">{precio}</span>
                    </p>
                    <a className="bton bton-celeste agregar-producto" href="#" data-id="{id}">Ver detalle</a>
                </div>
            </div>
        </div>
    );
}

export default Item;