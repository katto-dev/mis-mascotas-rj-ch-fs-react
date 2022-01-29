import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import '../App.css';

import NavBar from '../componentes/NavBar';
import ItemListContainer from "../componentes/ItemListContainer";
import Footer from '../componentes/Footer';

function Home() {
    return (
        <Container>
            <NavBar />

            <ItemListContainer />

            <Footer />
        </Container>
    );
}

export default Home;