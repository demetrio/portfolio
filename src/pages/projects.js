import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectCard from '../components/project-card';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const ListProjects = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 1em;
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
			<ListProjects>
				{projects.map(({ node: project }) => {
					const { id, title, url, git_url, tags } = project;
					const imageData = project.image.childImageSharp.fluid;
					return <ProjectCard key={id} title={title} imageData={imageData} url={url} git_url={git_url} tags={tags} />;
				})}
			</ListProjects>
			<SEO title="Projects" />
		</Layout>
	);
};

export default Projects;
