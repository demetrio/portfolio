import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

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
		.tags {
			display: grid;
			gap: 10px;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
	}
`;

const Url = styled.div`
	display: flex;
	gap: 10px;
	grid-template-columns: repeat(auto-fit);
	margin-bottom: 10px;
`;

const Tag = styled.span`
	font-family: Roboto, -apple-system, Helvetica Neue, sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	text-align: center;
	padding: 5px 10px;
`;

const Button = styled.a`
	font-family: Roboto, -apple-system, Helvetica Neue, sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	text-align: center;
	padding: 5px 10px;
	width: 50%;
	text-decoration: none;
`;

const ProjectCard = ({ url, title, imageData, git_url, tags }) => (
	<Project>
		<div className="project-image">
			<Image fluid={imageData} alt={title} />
		</div>
		<div className="project-info">
			<h3>{title}</h3>
			<Url>
				<Button className="button" href={url}>
					Website <FiExternalLink />
				</Button>
				<Button className="buttton" href={git_url}>
					Repository <FaGithub />
				</Button>
			</Url>
			<div className="tags">
				{tags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</div>
		</div>
	</Project>
);

export default ProjectCard;
