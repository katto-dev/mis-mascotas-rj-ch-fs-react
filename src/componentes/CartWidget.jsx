import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    return (
        <>
            <FontAwesomeIcon icon={ faShoppingCart } size='2x' />
            <span  className="badge rounded-pill bg-danger badge-carrito">
                <span className="cantCarrito">4</span>
            </span>
        </>
        
    );
}

export default CartWidget;