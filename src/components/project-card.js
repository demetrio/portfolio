import React from 'react';
import Image from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { Project, ProjectInfo, TagContainer, Url, Tag, Button } from './project-card.styles';

const ProjectCard = ({ url, title, imageData, git_url, tags }) => (
	<Project>
		<div className="project-image">
			<Image style={{ maxHeight: '230px' }} fluid={imageData} alt={title} />
		</div>
		<ProjectInfo>
			<h3>{title}</h3>
			<Url>
				<Button href={url}>
					<span>Website</span>
					<FiExternalLink />
				</Button>
				<Button href={git_url}>
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
