import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { FaGithub } from 'react-icons/fa';

const Project = styled.div`
	* {
		box-sizing: border-box;
	}

	box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
	border-radius: 10px;
	overflow: auto;

	.project-image {
		border-bottom: 7px solid ${colors.purple800};
	}

	.project-info {
		padding: 1em;

		h3 {
			margin-bottom: 10px;
		}
		span {
			padding: 0.5em;
		}
	}
`;

const ProjectCard = ({ url, title, imageData, git_url, tags }) => (
	<Project>
		<div className="project-image">
			<Image fluid={imageData} alt={title} />
		</div>
		<div className="project-info">
			<h3>{title}</h3>
			<div className="url">
				<a href={url}>{url}</a>
				<a href={git_url}>
					<FaGithub />
				</a>
			</div>
			<div className="tags">
				{tags.map(tag => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</div>
	</Project>
);

export default ProjectCard;
