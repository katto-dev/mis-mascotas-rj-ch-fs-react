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
                        <span className="badge bg-success">{mascota}</span> <span className="badge bg-primary">{marca}</span> <span className="badge bg-dark">{peso}</span>
                    </p>
                    <p>{tipoprod}</p>
                    <p>$ <span className="precio">{precio}</span></p>
                </div>
                <div>
                    <a className="bton bton-celeste agregar-producto" href="#" data-id="{id}">Agregar al carrito</a>
                </div>
                
            </div>
        </div>
    );
}

export default Item;