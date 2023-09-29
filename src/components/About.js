import {INFO, STYLE, SOCIAL_LINKS} from "../constants";
import {Card, Col, Row} from "react-bootstrap";

const About = () => {
    return (
        <div id="about" className={'mt-5 align-items-center justify-content-center'}>
            <h3 className={'border-1 border rounded-6 bg-dark bg-opacity-25 p-3 shadow-lg'} style={STYLE}>
                <i className="fas fa-user"></i> About Me
            </h3>
            <p className={'text-start mt-5'}>

            </p>
            <div className={'mt-5 mb-4'}>
                <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                    <Col className={'mb-3'}>
                        <Card className={'m-2 shadow-lg p-3 mb-5 bg-dark text-white rounded w-100'}
                              href={SOCIAL_LINKS.github.link}>
                            <Card.Body>
                                <Card.Title className={'text-decoration-underline text-center'} style={STYLE}>
                                    Who I'm</Card.Title>
                                <Card.Text className={'text-start'}>
                                    Highly motivated software developer. A team player with excellent human skills,
                                    eager to find the next
                                    challenge to tackle.
                                    I have a passion for learning new technologies and
                                    I'm always looking for new opportunities.&#123; <i
                                    className="fas fa-laptop-code"></i> &#125;
                                </Card.Text>
                                <p>{}</p>
                                {/*<Card.Img src={image}/>*/}
                            </Card.Body>
                            <Card.Footer>
                                <div className={'text-center border-1 border-white'}>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Card className={'text-white mx-4 text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'} id='contact-info'>
                    <Card.Title className={'text-white text-decoration-underline text-center'}
                                style={STYLE}>Contact Me <i className="fas fa-comment-dots"></i></Card.Title>

                    <Card.Body className={'contact-info mx-auto shadow-lg'}>
                        <i className="fas fa-envelope fa-lg" style={{color: '#f52424'}}></i>
                        <span>
                        <a className={'text-info'} href={`mailto:${INFO.email}`}><b>{INFO.email}</b></a>
                        </span>| &nbsp; &nbsp;
                        <i className="fas fa-phone-alt fa-lg"></i>
                        <span>
                            <a className={'text-info'} href={`tel:${INFO.phone}`}><b>{INFO.phone}</b></a>
                        </span> | &nbsp; &nbsp;
                        <i className="fab fa-whatsapp fa-lg" style={{color: '#25D366'}}></i>
                        <span>
                            <a className={'text-info'}
                               href={`https://api.whatsapp.com/send?phone=${INFO.domainPhone}`}><b>{INFO.phone}</b></a>
                        </span>| &nbsp; &nbsp;
                        <i className="fab fa-linkedin-in fa-lg"></i>
                        <span>
                            <a className={'text-info'}
                               href={SOCIAL_LINKS.linkedin.link}><b>{SOCIAL_LINKS.linkedin.name}</b></a>
                        </span>| &nbsp; &nbsp;
                        <i className="fab fa-github fa-lg"></i>
                        <span>
                            <a className={'text-info'} href={SOCIAL_LINKS.github.link}><b>{SOCIAL_LINKS.github.name}</b></a>
                        </span>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;