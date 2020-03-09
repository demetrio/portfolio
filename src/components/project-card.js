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
		.tags {
			display: grid;
			gap: 10px;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid black;
			text-align: center;
			padding: 5px 10px;
		}

		.url {
			display: flex;
			gap: 10px;
			grid-template-columns: repeat(auto-fit);
		}
	}
`;

const Button = styled.a`
	width: 50%;
	font-weight: bold;
	text-align: center;
	display: inline-block;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 6px;
	background: #03a9f4;
	color: white;
	position: relative;
	top: 0;
	transition: 0.2s ease;
`;

const ProjectCard = ({ url, title, imageData, git_url, tags }) => (
	<Project>
		<div className="project-image">
			<Image fluid={imageData} alt={title} />
		</div>
		<div className="project-info">
			<h3>{title}</h3>
			<div className="url">
				<Button className="button" href={url}>
					Link
				</Button>
				<Button className="buttton" href={git_url}>
					<FaGithub />
				</Button>
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
