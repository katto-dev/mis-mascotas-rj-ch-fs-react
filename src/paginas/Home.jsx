import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import ItemListContainer from "../componentes/ItemListContainer";
import ItemDetailContainer from '../componentes/ItemDetailContainer';

function Home() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idMascota' element={<ItemListContainer />} />
                <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Home;