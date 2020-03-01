import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ url, title, description, imageData }) => (
	<div className="project-preview">
		<Link to={`/${url}/`}>
			<Image fluid={imageData} alt={title} />
			<h2>
				<Link to={`/${url}/`}>{url}</Link>
			</h2>
			<p>{description}</p>
			<p>
				<Link to={`/${url}/`}>View this project</Link>
			</p>
		</Link>
	</div>
);

export default ProjectPreview;
