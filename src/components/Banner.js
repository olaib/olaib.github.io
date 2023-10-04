import {useEffect, useState} from 'react';
import {JOB_DESCRIPTIONS, STYLE, TYPING_DELAY, CV_LINK, IMAGE_6} from "../constants";
import HireMe from "./HireMe";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

const Banner = () => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [currentCharTypingIndex, setCurrentCharTypingIndex] = useState(0);
    const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText('');
            setCurrentCharTypingIndex(0);
            setIndex(index => (index + 1) % JOB_DESCRIPTIONS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let currentWord = JOB_DESCRIPTIONS[index];
        if (currentCharTypingIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + currentWord[currentCharTypingIndex]);
                setCurrentCharTypingIndex(prevIndex => prevIndex + 1);
            }, TYPING_DELAY);
            return () => clearTimeout(timeout);
        }
    }, [index, currentCharTypingIndex]);

    return (
        <div id="home" className={'mt-5 align-items-center justify-content-center'}>
            <div className={'mt-5 text-start p-5 shadow-lg bg-opacity-25 mx-auto'}>
                <div className={'home-content'}>
                    <bold className={'mt-3'}>
                        <h4 className={'animated-hello'}>
                            <i className={'fas fa-code colored'}></i> (" {' '}
                            <span className={'hello'}>Hello</span>{' '}
                            <span className={'world'}>World</span>{' '}
                            <i className={'fas fa-heart colored'}></i> ")
                            <i className={'fas fa-code colored'}></i>
                        </h4>
                    </bold>
                    <Row>
                        <Col md={6} className={'mx-auto'}>
                            <h1 className={'mt-3 mb-3'}>{' '}I'm <span className={'logo display-4'}>
                                <span className={'glow-text colored'}>O</span>la</span>{' '}
                                <span className={'logo display-4'}>
                                    <span className={'glow-text colored'}>I</span>brahim
                                </span>
                            </h1>
                        </Col>
                        <Col sm={12} md={6} className={'mx-auto'}>
                            <div className={'d-flex justify-content-end animated-image'}>
                                <Image src={IMAGE_6}
                                       className={'img-fluid w-75'} roundedCircle alt={'rotate image'}/>
                            </div>
                        </Col>
                    </Row>
                    <h4 className={'description mt-4 mb-2'}>
                        I'm a{' '}<span style={STYLE} className={'colored typing'}>{currentText}</span> Developer</h4>
                    <h5 className={'description mt-4 mb-2'}>
                        <Row>
                            <div className={'col-auto animated-hello'}>
                                <i className="fas fa-quote-left"></i> {' '}
                                <span className={'third-word'}>Success is not final; failure is not fatal: It is the courage to continue that counts.</span>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <div className={'col-auto'}>
                                <h6 className={'glow-text mt-2 quote-writer'}>Winston S. Churchill</h6>
                            </div>
                        </Row>
                    </h5>
                    <p className={'mb-4 mt-4'}>
                        Here you can know more about Me, My <span className={'colored'}>Skills</span> and My <span
                        className={'colored'}>Projects</span>
                        , and you can also Download my <span className={'colored'}>CV, Hire Me,</span>{' '}
                        or <span className={'colored'}> Contact Me</span>. &#123; <i
                        className="fas fa-smile"></i> &#125;
                    </p>
                    <Button
                        className={'btn glow-text click-me bg-transparent shadow-md rounded-1 border-white border-1'}
                        href="#about">
                        More About Me <i className="fas fa-arrow-down"></i>
                    </Button>
                    <ButtonGroup className={'d-flex justify-content-center mt-5'}>
                        <Button
                            className={'btn click-me bg-transparent shadow-md rounded-1 border-white border-1 glow-text'}
                            size={'lg'}
                            onClick={() => {
                                window.open(CV_LINK, '_blank');
                            }}>
                            Download CV</Button>
                        <Button
                            className={'btn click-me bg-transparent shadow-md rounded-0 border-white border-1 glow-text'}
                            size={'lg'}
                            onClick={() => setIsHireMeModalOpen(!isHireMeModalOpen)}>Hire Me</Button>
                        <Button
                            className={'btn click-me bg-transparent shadow-md rounded-1 border-white border-1 glow-text'}
                            size={'lg'}
                            href={'#contact-info'}>Contact Me</Button>
                    </ButtonGroup>
                </div>
                {isHireMeModalOpen &&
                    <HireMe show={isHireMeModalOpen} handleClose={() => setIsHireMeModalOpen(false)}/>
                }
            </div>
        </div>
    )
        ;
}

export default Banner;
