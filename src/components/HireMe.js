import {INFO, NAV_ICONS_COLOR} from "../constants";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HireMe = (props) => {
    return (
        <section className="section mt-5 shadow-lg rounded-3 bg-dark bg-opacity-25 p-3" id="hire-me">
            <Accordion defaultActiveKey={['0']} flash alwaysOpen={true} className={'text-start'}>
                <Accordion.Item eventKey="0" className={'bg-dark shadow-lg bg-opacity-25 p-3'}
                                style={{color: `${NAV_ICONS_COLOR}`}}>
                    <Accordion.Header className={'text-decoration-underline'}>Why Hire Me?</Accordion.Header>
                    <Accordion.Body className={'bg-dark shadow-lg bg-opacity-75 p-3 rounded-3'}>
                        <Row>
                            <Col className={'mb-3'}>
                                <div className={'text-white text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                                    <h3 className={'mb-5 text-white text-decoration-underline text-center'}
                                        style={{color: NAV_ICONS_COLOR}}>Why Hire Me?</h3>
                                    <div>
                                        <p className="subtitle">
                                            I'm a Software Developer with a strong background in web development.
                                            I specialize in building using a variety of technologies like React,
                                            Node.js, Java, Flask, MongoDB, MySQL, SQLite, Docker, CI/CD and more.
                                        </p>
                                        <p className="subtitle">
                                            I am passionate about creating high-quality software and solving problems.
                                            I am a quick learner and I am always looking for new opportunities to
                                            learn and grow.<br/>
                                        </p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={'bg-dark shadow-lg bg-opacity-25 p-3'}
                                style={{color: `${NAV_ICONS_COLOR}`}}>
                    <Accordion.Header className={'text-decoration-underline'}>What I Can Do?</Accordion.Header>
                    <Accordion.Body className={'bg-dark shadow-lg bg-opacity-75 p-3 rounded-3'}>
                        <Row>
                            <Col className={'mb-3'}>
                                <div className={'text-white text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                                    <h3 className={'mb-5 text-white text-decoration-underline text-center'}
                                        style={{color: NAV_ICONS_COLOR}}>What I Can Do?</h3>
                                    <div>
                                        <p>
                                            I can build a full-stack responsive web application from scratch using a
                                            variety of
                                            technologies like React, Bootstrap, Node.js, Java, Flask, MongoDB, MySQL,
                                            SQLite,
                                            Docker, CI/CD and more.
                                        </p>
                                        <p>
                                            In addition, I am a software developer with a strong background in OOP, Data
                                            Structures, Design Patterns, SOLID, Clean Code and more.
                                        </p>
                                        <p>
                                            Additionally, I offer private programming lessons. I can provide guidance
                                            and teach you how to solve problems,
                                            develop applications, and advance in the field of programming. I specialize
                                            in programming languages like JavaScript, Python, Java, and more.
                                        </p>
                                        <p>
                                            I can work on a team or independently. I am a quick learner and I am always
                                            thirsty for knowledge.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={'bg-dark shadow-lg bg-opacity-25 p-3'}
                                style={{color: `${NAV_ICONS_COLOR}`}}>
                    <Accordion.Header className={'text-decoration-underline'}>How to Hire Me?</Accordion.Header>
                    <Accordion.Body className={'bg-dark shadow-lg bg-opacity-75 p-3 rounded-3'}>
                        <Row>
                            <Col className={'mb-3'}>
                                <div className={'text-white text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                                    <h3 className={'mb-5 text-white text-decoration-underline text-center'}
                                        style={{color: NAV_ICONS_COLOR}}>How to Hire Me?</h3>
                                    <div>
                                        <p>
                                            If you have projects or job opportunity you'd like to discuss, please
                                            contact me at <a href={`mailto:${INFO.email}`}>{INFO.email}</a> or {' '}
                                            <a href={'#contact-info'}>Contact Me {' '}
                                                <i style={{color: 'white'}} className="fas fa-contact-book"></i>
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                {/*<Accordion.Item eventKey="1">*/}

                {/*    <Accordion.Header className={'text-decoration-underline'}>How to Hire Me?</Accordion.Header>*/}
                {/*    <Accordion.Body>*/}
                {/*        <Container>*/}
                {/*            <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>*/}
                {/*                <Col className={'mb-3'}>*/}
                {/*                    <Card>*/}
                {/*                        <Card.Body>*/}
                {/*                            <p className="title">*/}
                {/*                                Contact Me*/}
                {/*                            </p>*/}
                {/*                            <p className="subtitle">*/}
                {/*                                If you are interested in hiring me contact me at*/}
                {/*                                <a href={`mailto:${INFO.email}`}>{INFO.email}</a>*/}
                {/*                            </p>*/}
                {/*                        </Card.Body>*/}
                {/*                    </Card>*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        </Container>*/}
                {/*    </Accordion.Body>*/}
                {/*</Accordion.Item>*/}
            </Accordion>
        </section>
    );
}

export default HireMe;
