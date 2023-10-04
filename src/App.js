import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalTraining from "./components/ProfessionalTraining";
import {useEffect, useState} from "react";


function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    return (
        <Container fluid className={'App bg-dark custom-cursor'}>
            {loading ?
                <LoadingScreen/> :
                <>
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
                </>
            }
        </Container>
    );
}

const LoadingScreen = () => {
    return (
        <div className={'loading-screen'}>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}
export default App;
