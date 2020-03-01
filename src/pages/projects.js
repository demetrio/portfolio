import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/project-review';

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				edges {
					node {
						id
						title
						description
						url
						image {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	`);

	const projects = data.allProjectsJson.edges;

	return (
		<Layout>
			{projects.map(({ node: project }) => {
				const { id, title, description, url } = project;
				const imageData = project.image.childImageSharp.fluid;
				return <ProjectPreview key={id} title={title} description={description} imageData={imageData} url={url} />;
			})}

			<SEO title="Projects" />
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	);
};

export default Projects;
