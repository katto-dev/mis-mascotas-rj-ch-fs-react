import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import Footer from './components/Footer';

function App() {
  return (
      <Container>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <ItemListContainer />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
  );
}

export default App;
