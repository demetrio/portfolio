import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Project = styled.div`
	* {
		box-sizing: border-box;
	}

	box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
	border-radius: 10px;
	overflow: auto;

	.image {
		border-bottom: 7px solid #673ab7;
	}

	.info {
		padding: 1em 1em 0;
		background-color: red;

		h3 {
			margin-bottom: 10px;
		}
	}
`;

const ProjectPreview = ({ url, title, description, imageData, git_url, tags }) => (
	<Project>
		<div className="image">
			<Image fluid={imageData} alt={title} />
		</div>

		<div className="info">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
		<div className="url">
			<p>{url}</p>
			<p>{git_url}</p>
		</div>
		<div className="url">
			<p>{tags.map(tag => tag)}</p>
		</div>
	</Project>
);

export default ProjectPreview;
