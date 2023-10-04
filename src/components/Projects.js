import Row from "react-bootstrap/Row";
import {PROJECTS, SOCIAL_LINKS, STYLE} from "../constants";
import ProjectCard from "./ProjectCard";

const TITLE = 'My Projects';
const Projects = () => {
    return (
        <div id="projects" className={'mt-5 align-items-center'}>
            <h2 className={'text-center border border-1 rounded-3 bg-dark bg-opacity-25 p-3 shadow-lg'} style={STYLE}>
                {TITLE.split(' ').map((char, index) =>
                    <span key={index} className={index % 2 === 0 ? 'glow-text colored' : ''}>{char} </span>
                )}
            </h2>
            <div className={'mx-4'}>
                <h5 className={'text-start mt-5'}>
                    Here are some of my projects. You can also find more of my projects on my
                    <a href={SOCIAL_LINKS.github.link}> Github </a>page.
                </h5>
                <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                    <>
                        {PROJECTS && PROJECTS.map((project, index) => {
                            return (
                                <ProjectCard key={index} title={project.title} description={project.description}
                                             image={project.imgUrl} About={project.About}
                                             githubLink={project.githubLink} youtubeLink={project.youtubeLink}/>
                            )
                        })}
                    </>
                </Row>
            </div>

        </div>
    );
}

export default Projects;
