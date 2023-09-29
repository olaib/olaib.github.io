import {Row} from "react-bootstrap";
import {PROJECTS, SOCIAL_LINKS, STYLE} from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="projects" className={'mt-5 align-items-center'}>
            <h3 className={'border border-1 rounded-3 bg-dark bg-opacity-25 p-3 shadow-lg'} style={STYLE}>
                My Projects
            </h3>
            <div className={'mx-4'}>
                <h5 className={'text-start mt-5'}>
                    Here are some of my projects. You can also find more of my projects on my<a href={SOCIAL_LINKS.github.link} style={{color: `${STYLE.color}`}}>Github</a>page.
                </h5>
                <Row className={'text-start shadow-lg rounded-3 bg-dark bg-opacity-25 p-3'}>
                    {PROJECTS && PROJECTS.map((project, index) => {
                        return (
                            <ProjectCard key={index} title={project.title} description={project.description}
                                         image={project.imgUrl} About={project.About}
                                         githubLink={project.githubLink} youtubeLink={project.youtubeLink}/>
                        )
                    })}
                </Row>
            </div>

        </div>
    );
}

export default Projects;