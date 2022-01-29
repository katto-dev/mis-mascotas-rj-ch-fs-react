import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "react-bootstrap";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Row>
            <header id="main-header">
                <a id="logo-header" href="">
                    <span className="site-name">Mis Mascotas</span>
                    <span className="site-desc">Delivery online especializado en productos para perros y gatos</span>
                </a>
                <nav>
                    <ul>
                        <li><a className="link-inicio" href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li id="ver-carrito">
                            <a href="#"><CartWidget /></a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Row>
    );
}

export default NavBar;
