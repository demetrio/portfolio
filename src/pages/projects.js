import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import dimensions from '../styles/dimensions';
import ProjectCard from '../components/project-card';
import SEO from '../components/seo';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
`;

const ListProjects = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;

	@media (max-width: ${dimensions.maxwidthTablet}px) {
		grid-template-columns: 1fr;
	}
`;

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				edges {
					node {
						id
						title
						url
						git_url
						tags
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
			<SEO title="Projects" />
			<Welcome>My Portfolio</Welcome>
			<ListProjects>
				{projects.map(({ node: project }) => {
					const { id, title, url, git_url, tags } = project;
					const imageData = project.image.childImageSharp.fluid;
					return <ProjectCard key={id} title={title} imageData={imageData} url={url} git_url={git_url} tags={tags} />;
				})}
			</ListProjects>
		</Layout>
	);
};

export default Projects;
