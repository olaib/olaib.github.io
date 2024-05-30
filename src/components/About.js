import {SOCIAL_LINKS} from "../constants";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactMe from "./ContactMe";

const About = () => {
    return (
        <div id="about" className={'mt-5 align-items-center justify-content-center'}>
            <h3 className={'border-1 border rounded-6 bg-dark bg-opacity-25 p-3 shadow-lg text-center'}>
                <i className="fas fa-user"></i> {' '}LET ME {''}
                <span className={'colored glow-text'}>INTRODUCE</span> {' '}
                MYSELF<i className="fas fa-user"></i>
            </h3>
            <div className={'mt-5 mb-4'}>
                <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                    <Col className={'mb-3'}>
                        <Card className={'m-2 shadow-lg p-3 mb-5 bg-dark text-white rounded w-100'}
                              href={SOCIAL_LINKS.github.link}>
                            <Card.Body>
                                <h4 className={'mb-3'}>
                                    <span className={'colored'}>B.Sc. in Computer Science</span> graduate.
                                </h4>
                                <p>
                                    Passionate about <span className={'colored'}>Software Development</span> and Web
                                    Development.
                                </p>
                                <p>
                                    I thrive on <span className={'colored'}>learning new technologies</span> and use my
                                    passion for innovation to drive my work as a developer.
                                </p>
                                <p>
                                    <span className={'colored'}>Highly motivated</span> software developer. A <span
                                    className={'colored'}>team player</span> with excellent <span className={'colored'}>human skills</span>,
                                    eager to find the next challenge to tackle. I have a passion for learning new
                                    technologies and I'm always looking for new opportunities.{' '}
                                    &#123; <i className="fas fa-laptop-code"></i> &#125;
                                </p>
                                <p>
                                    I have experience in developing web applications using <span
                                    className={'colored'}>React</span>,{' '}
                                    <span className={'colored'}>Node.js</span>, <span
                                    className={'colored'}>Java</span> (Spring + OOP),{' '}
                                    <span className={'colored'}>Flask</span> and <span className={'colored'}>Flutter</span>(multi platform developemnt) and <span className={'colored'}>NestJs</span> and{' '}
                                    databases like{' '}
                                    <span className={'colored'}>MongoDB</span> and <span
                                    className={'colored'}>MySQL</span> and <span className={'colored'}>SQLite</span>.
                                </p>                       
                                <p>
                                    I have experience in game development using Unity for 3D games and SFML for 2D games.
                                </p>
                                <p>
                                    I possess a solid understanding of Object Oriented Programming (OOP) ,Data
                                    Structures and
                                    concepts like Design Patterns, SOLID, Clean Code.
                                    Additionally, I have a strong command of other programming languages like <span
                                    className={'colored'}>C++</span>,{' '}<span
                                    className={'colored'}>C</span>,{' '}<span className={'colored'}>Python</span>.
                                </p>
                                <p>
                                    And I have experience in <span className={'colored'}>CI/CD</span> and{' '}<span
                                    className={'colored'}>Docker</span>.
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <div className={'text-center border-1 border-white'}>
                                    <ContactMe/>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;
