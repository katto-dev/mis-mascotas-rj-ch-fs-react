// Get bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Get fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    return (
        <>
            <FontAwesomeIcon icon={faShoppingCart} size='2x' />
            <span  id="cantidad-prods-carrito" className="badge rounded-pill bg-danger">
                <span className="cantidad">0</span>
            </span>
        </>
        
    );
}

export default CartWidget;