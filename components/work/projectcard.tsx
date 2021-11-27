import { CardContent, CardWrapper, ProjectContentWrapper, ProjectDescription, ProjectImage, ProjectLink, ProjectLinks, ProjectTech, ProjectTitle } from "./projectcard.styles";
import Image from 'next/image'
import Link from 'next/link'
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa'
import { IProjectCard } from "@/interfaces/interfaces";

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const technologies = project.technologies.tech.flat().toString().split(",").join(", ")
  console.log(project);
  return (
    <CardWrapper>
      <ProjectImage>
        <Image src={project.image.url} layout="fill" objectFit="cover" />
      </ProjectImage>
      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectContentWrapper>
          <ProjectTech>
            {technologies}
          </ProjectTech>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectContentWrapper>
        <ProjectLinks>
          <ProjectLink>
            <span>
              <FaExternalLinkAlt size={18} />
            </span>
            <a href={project.links.demo} target="_blank">
              LIVE DEMO
            </a>
          </ProjectLink>
          <ProjectLink >
            <span>
              <FaGithubSquare size={20} />
            </span>
            <a href={project.links.repo} target="_blank">
              REPOSITORY
            </a>
          </ProjectLink>
        </ProjectLinks>
      </CardContent>
    </CardWrapper >
  )
};

export default ProjectCard
        //<Image src={project.image} width={200} height={160} />
