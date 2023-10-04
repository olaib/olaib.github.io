import Image from "react-bootstrap/Image";
import {EXCELLENTEAM_LINK, NAV_ICONS_COLOR, EXCELLENT_BADGE, CERTIFICATION} from "../constants";

const ProfessionalTraining = () => {
    return (
        <div className="experience">
            <div className="text-center border-1 border rounded-6 shadow-lg bg-dark bg-opacity-25 p-3">
                <h3>
                    <i className={'fas fa-briefcase'}></i>{' '}
                    MY <span className={'colored glow-text'}>PROFESSIONAL</span> TRAINING
                </h3>
            </div>
            <hr className={'w-100'} style={{backgroundColor: `${NAV_ICONS_COLOR}`}}/>
            <div className="container experience-wrapper">
                <h5 className={'text-decoration-underline mb-3'}>
                    Velocity Scale-Up Excellenteam Program</h5>
                <p>An intensive 5-week all-day bootcamp, post degree, gaining industry-level programming
                    proficiency. High emphasis on clean, elegant, and efficient code, with deep understanding of
                    software development
                    principles.</p>
                <div className={'text-center mb-3'}>
                    <a href={EXCELLENTEAM_LINK}><i className={'fas fa-hand-point-right'}></i>{' '}
                        Click here to View My Credential{' '}
                        <i className={'fas fa-hand-point-left'}></i>
                    </a>
                </div>
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
