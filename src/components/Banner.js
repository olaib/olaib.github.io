import {useEffect, useState} from 'react';
import {JOB_DESCRIPTIONS, STYLE, TYPING_DELAY, CV_LINK, NAV_ICONS_COLOR} from "../constants";
import {Button, ButtonGroup} from "react-bootstrap";

const Banner = () => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [currentCharTypingIndex, setCurrentCharTypingIndex] = useState(0);

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
                    <bold className={'mt-3'}><i className={'fas fa-code colored'}></i>print("Hello World <i
                        className={'fas fa-heart colored'}></i>")
                        <i className={'fas fa-code colored'}></i>
                    </bold>
                    <h1 className={'mt-3'}>
                        {' '}I'm <span className={'logo display-4'}><span style={{color: `${NAV_ICONS_COLOR}`}}>O</span>la</span>{' '}
                        <span className={'logo display-4'}><span
                            style={{color: `${NAV_ICONS_COLOR}`}}>I</span>brahim</span>
                    </h1>


                    <h4 className={'description mt-4'}>
                        I'm a{' '}<span style={STYLE} className={'colored'}>{currentText}</span> Developer</h4>
                </div>
                <p>
                    Here you can know more About Me, my Skills, Projects, and you can also Download my CV, Hire Me,
                    or Contact Me. &#123; <i className="fas fa-smile"></i> &#125;
                </p>
                <Button
                    className={'mt-5 btn w-50 click-me bg-transparent border-3 shadow-md border-white rounded-3 text-dark mx-auto'}
                    href="#about"
                    style={STYLE}>
                    More About Me <i className="fas fa-arrow-down"></i>
                </Button>
                <div className={'download-btn'}>
                    <ButtonGroup className={'d-flex justify-content-center mt-5'}>
                        <Button variant={'btn btn-outline-dark click-me'} style={STYLE} size={'lg'} onClick={() => {
                            window.open(CV_LINK, '_blank');
                        }}>
                            Download CV</Button>
                        <Button variant={'btn btn-outline-dark click-me'} style={STYLE} size={'lg'}>Hire Me</Button>
                        <Button variant={'btn btn-outline-dark click-me'} style={STYLE} size={'lg'}
                                href={'#contact-info'}>Contact Me</Button>
                    </ButtonGroup>
                </div>

            </div>


        </div>
    );
}

export default Banner;