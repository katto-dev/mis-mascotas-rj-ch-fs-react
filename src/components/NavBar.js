import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <header id="main-header">
        <a id="logo-header" href="#">
            <span class="site-name">Mis Mascotas</span>
            <span class="site-desc">Delivery online especializado en productos para perros y gatos</span>
        </a>
        <nav>
            <ul>
                <li><a class="link-inicio" href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li id="ver-carrito">
                    <a href="">Carrito</a>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default NavBar;
