import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import '../App.css';

import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import ItemListContainer from "../componentes/ItemListContainer";
import ItemDetailContainer from '../componentes/ItemDetailContainer';

function Home() {
    return (
        <Container>
            <NavBar />

            <ItemDetailContainer />
            <ItemListContainer />

            <Footer />
        </Container>
    );
}

export default Home;