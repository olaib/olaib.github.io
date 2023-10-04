import Card from "react-bootstrap/Card";
import {CONTACT_INFO} from "../constants";

const ContactMe = () => {
    return (
        <Card id='contact-info'
              className={'text-white mx-2 border-2 border-white mx-sm-4 text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}
        >
            <Card.Title className={'glow-text text-white text-decoration-underline text-center'}>
                Contact Me {' '} <i className="fas fa-comment-dots"></i>
            </Card.Title>
            <Card.Body className={'contact-info mx-auto shadow-lg'}>
                <div className={'d-flex flex-column flex-md-row align-items-center justify-content-center'}>
                    {CONTACT_INFO.map((info, index) =>
                        <div key={index} className={'d-flex align-items-center mb-2 mb-md-0'}>
                            <i className={info.icon} style={{color: `${info.color}`}}></i>
                            <span className={'mx-2'}>
                                <a className={'text-info'} href={info.link}>
                                    <b>{info.text}</b>
                                </a>
                            </span> | &nbsp; &nbsp;
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ContactMe;
