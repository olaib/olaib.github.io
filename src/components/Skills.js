import {SKILLS} from "../constants";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Skills = () => {
    return (
        <>
            <div id="skills" className={'mt-5'}>
                <h2 className="d-flex justify-content-center border-1 border rounded-6 shadow-lg bg-dark bg-opacity-25 p-3">
                    <i className={'fas fa-laptop-code'}></i>&nbsp; My Skills</h2>
                <div className={'mx-5 skills-content mb-5 bg-opacity-25 text-start'}>
                    <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                        <Col className={'mb-3'} md={6}>
                            <h5 className={'mt-5 mb-3 glow-text colored'}>Programming Languages</h5>
                            <ul className={'mb-5'}>
                                {SKILLS.programmingLanguages.map((skill, index) =>
                                    <li key={index}>
                                        {skill.img ?
                                            <img src={skill.img} alt={skill.name} width={30} height={30}
                                                 style={{backgroundColor: 'white'}}/>
                                            :
                                            <i className={`${skill.icon}`}></i>
                                        } {skill.name}</li>
                                )}
                            </ul>
                        </Col>
                        <Col className={'mb-3'} md={6}>
                            <h5 className={'mt-5 mb-3 glow-text colored'}>Tools & Frameworks</h5>
                            <ul className={'mb-5'}>
                                {SKILLS.toolsAndFrameworks.map((skill, index) =>
                                    <li key={index}>
                                        {skill.img ?
                                            <img src={skill.img} alt={skill.name} width={30} height={30}
                                                 style={{backgroundColor: 'white'}}/>
                                            :
                                            <i className={`${skill.icon}`}></i>
                                        } {skill.name}</li>
                                )}
                            </ul>
                            <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                                I also have experience in:
                                <ul className={'mb-5 mx-3'}>
                                    {SKILLS.other.map((skill, index) =>
                                        <li key={index}>
                                            {skill.img ?
                                                <img src={skill.img} alt={skill.name} width={30} height={30}
                                                     style={{backgroundColor: 'white'}}/>
                                                :
                                                <i className={`${skill.icon}`}></i>
                                            } {skill.name}</li>
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
