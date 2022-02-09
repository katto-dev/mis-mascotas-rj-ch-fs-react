import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import ItemListContainer from "../componentes/ItemListContainer";
import ItemDetailContainer from '../componentes/ItemDetailContainer';
import Cart from "../componentes/Cart";

function Home() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* Intercambiabilidad (ItemListContainer) */}
                <Route path='/' element={ <ItemListContainer /> } />
                <Route path='/category/:idMascota' element={ <ItemListContainer /> } />
                <Route path='/item/:idProducto' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={ <Cart /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Home;