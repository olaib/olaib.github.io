import {Image} from "react-bootstrap";
import EXCELLENT_BADGE from "../assets/images/Badges_Excellenteam.png";
import CERTIFICATION from "../assets/images/certification.jpeg";
import {EXCELLENTEAM_LINK, NAV_ICONS_COLOR} from "../constants";

const ProfessionalTraining = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1><i className={'fas fa-briefcase'}></i> Professional Training</h1>
            </div>
            <hr className={'w-100'} style={{backgroundColor: `${NAV_ICONS_COLOR}`}}/>
            <div className="container experience-wrapper">
                <h3 className={'text-decoration-underline mb-3'}>
                    Velocity Scale-Up Excellenteam Program</h3>
                <p>An intensive 5-week all-day bootcamp, post degree, gaining industry-level programming
                    proficiency. High emphasis on clean, elegant, and efficient code, with deep understanding of
                    software development
                    principles.
                    <a href={EXCELLENTEAM_LINK}><i className={'fas fa-hand-point-right'}></i>{' '}
                        Click here to View My Credential{' '}
                        <i className={'fas fa-hand-point-left'}></i>
                    </a>
                </p>
                <a className={'text-info mx-auto'}
                   href={EXCELLENTEAM_LINK}>
                    <Image src={EXCELLENT_BADGE} className={'img-fluid'} alt={'ExcellentTeam Badge'}
                           style={{width: '150px'}}/>
                    <Image src={CERTIFICATION} className={'img-fluid'} alt={'Certificate'}/>
                </a>
            </div>
        </div>
    );
}

export default ProfessionalTraining;