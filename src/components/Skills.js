import {STYLE, SKILLS} from "../constants";
import {Col, Row} from "react-bootstrap";

const Skills = () => {
    return (
        <>
            <div id="skills" className={'mt-5'}>
                <h3 className={'rounded-3 border-1 border bg-dark bg-opacity-25 p-3 shadow-lg'} style={STYLE}>My
                    Skills</h3>
                <div className={'mx-5 skills-content mb-5 bg-opacity-25 text-start'}>
                    <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                        <Col className={'mb-3'} md={6}>
                            <h5 className={'mt-5 mb-3'}>Programming Languages</h5>
                            <ul className={'mb-5'}>
                                {SKILLS.programmingLanguages.map((skill, index) =>
                                    <li key={index}><i className={`${skill.icon}`}></i> {skill.name}</li>
                                )}
                            </ul>
                        </Col>
                        <Col className={'mb-3'} md={6}>
                            <h5 className={'mt-5 mb-3'}>Tools & Frameworks</h5>
                            <ul className={'mb-5'}>
                                {SKILLS['tools & frameworks'].map((skill, index) =>
                                    <li key={index}><i className={`${skill.icon}`}></i> {skill.name}</li>
                                )}
                            </ul>
                            <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                                I also have experience in:
                                <ul className={'mb-5 mx-3'}>
                                    {SKILLS.other.map((skill, index) =>
                                        <li key={index}><i className={`${skill.icon}`}></i> {skill.name}</li>
                                    )}
                                </ul>
                            </Row>
                        </Col>
                    </Row>


                </div>
            </div>
        </>
    );
}

export default Skills;