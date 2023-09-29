import {Card, Col} from "react-bootstrap";
import {GITHUB_ICON, STYLE, YOUTUBE_ICON} from "../constants";
import {useState} from "react";

const ProjectCard = (props) => {
    const {title, description, image, githubLink, youtubeLink, About} = props;
    const [showYoutube, setShowYoutube] = useState(false);
    return (
        <Col size={12} md={6} className={'mb-3 shadow-lg'}>
            <Card className={'card m-2 shadow-lg p-3 text-center mx-auto mb-5 bg-dark text-white rounded w-100 h-100'} href={githubLink}>
                <Card.Body>
                    <Card.Title className={'text-decoration-underline'}>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p className={'text-start'}>{About}</p>
                    <Card.Img src={image} className={'img-fluid'} style={{width: '500px', height: '330px'}}/>
                </Card.Body>
                <Card.Footer>
                    <div className={'text-center border-1 border-white'}>
                        <a href={githubLink}><i className={`${GITHUB_ICON} fa-2x`} style={{color: "white"}}></i></a>
                        {youtubeLink && !showYoutube && <a href={youtubeLink}><i className={`${YOUTUBE_ICON} fa-2x`}
                                                                                 style={{color: "red"}}></i></a>}
                        {showYoutube && <iframe width="420" height="250" src={youtubeLink} title="YouTube video player"
                                                allowFullScreen={true}></iframe>}
                    </div>
                </Card.Footer>

            </Card>
        </Col>
    );
}

export default ProjectCard;