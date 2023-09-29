import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Row} from "react-bootstrap";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import ProfessionalTraining from "./components/ProfessionalTraining";


function App() {
    return (
        <Container fluid className="App">
            <Row>
                <NavBar/>
            </Row>
            <Row>
                <Banner/>
                <About/>
                <ProfessionalTraining/>
                <Skills/>
                <Projects/>
            </Row>
        </Container>
    );
}

export default App;
