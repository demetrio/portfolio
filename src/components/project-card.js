import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import {
  Project,
  ProjectInfo,
  ProjectImage,
  TagContainer,
  Url,
  Tag,
  Button,
} from './project-card.styles';

const ProjectCard = ({ url, title, imageData, git_url, tags }) => (
  <Project>
    <ProjectImage aria-label={`Screenshot of ${title} project`}>
      <GatsbyImage image={imageData} style={{ maxHeight: '230px' }} alt={title} />
    </ProjectImage>
    <ProjectInfo>
      <h3>{title}</h3>
      <Url>
        <Button
          href={url}
          aria-label={`Link to the website of ${title} project`}
        >
          <span>Website</span>
          <FiExternalLink />
        </Button>
        <Button
          href={git_url}
          aria-label={`Link to the repository of ${title} project`}
        >
          <span>Repository</span>
          <FaGithub />
        </Button>
      </Url>
      <TagContainer>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
    </ProjectInfo>
  </Project>
);

export default ProjectCard;
