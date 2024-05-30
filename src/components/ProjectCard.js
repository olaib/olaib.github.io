import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {GITHUB_ICON, YOUTUBE_ICON} from "../constants";

const ProjectCard = (props) => {
    const {title, description, image, githubLink, youtubeLink, About} = props;
    return (
        <Col size={12} md={6} className={'mb-3 shadow-lg'}>
            <Card
                className={'card-select m-2 shadow-lg p-3 text-center mx-auto mb-5 bg-dark text-white rounded w-100 h-100'}
                href={githubLink}>
                <Card.Body>
                    <Card.Title className={'text-decoration-underline'}>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p className={'text-start'}>{About}</p>
                    <Card.Img src={image} className={'img-fluid'} style={{objectFit:'cover'}}/>
                </Card.Body>
                <Card.Footer>
                    <div className={'text-center border-1 border-white'}>
                        <a href={githubLink}>
                            <i className={`${GITHUB_ICON} fa-2x`} style={{color: "white"}}></i>
                        </a>
                        {youtubeLink &&
                            <a href={youtubeLink} className={'mx-2'}>
                                <i className={`${YOUTUBE_ICON} fa-2x`} style={{color: "red"}}></i>
                            </a>
                        }
                    </div>
                </Card.Footer>

            </Card>
        </Col>
    );
}

export default ProjectCard;
