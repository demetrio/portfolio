import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Welcome, Subtitle, Info, SkillsTable, Title, JobTitle, SubDate } from '../styles/about.styles.js';

const About = () => {
	const data = useStaticQuery(graphql`
		{
			allSkillsJson {
				edges {
					node {
						main
						skills
					}
				}
			}

			allJobsJson {
				edges {
					node {
						company
						dates
						description
					}
				}
			}
		}
	`);

	const skillsData = data.allSkillsJson.edges;
	const jobsData = data.allJobsJson.edges;

	return (
		<Layout>
			<SEO title="About me" />
			<Welcome>About me</Welcome>
			<p>
				I have a powerful passion for UI & UX Design that together with my obsessive attention to detail makes me care for my work to the
				fullest. In my free time, I love to search about web development and look at other people’s ideas.
			</p>
			<p>
				Whenever I see an ingenious design or project, I need to know how it was achieved, and if I discover a fresh technology, I try to
				learn it and think of a concept that can fit with it and share this with my friends.
			</p>
			<p>Apart from this, I have a great enthusiasm for the audiovisual world, video games, show business and communication.</p>
			<p>I’m focusing on improving my knowledge of React, GraphQL and Accessibility, among other technologies.</p>
			<Info>
				<div>
					<Subtitle>Skills</Subtitle>
					{skillsData.map(({ node: skill }) => {
						const { main, skills } = skill;
						return (
							<SkillsTable key={main}>
								<Title>{main}:</Title> <span key={skill}>{skills.join(', ')}.</span>
							</SkillsTable>
						);
					})}
				</div>
				<div>
					<Subtitle>Currently working at</Subtitle>
					{jobsData.map(({ node: job }) => {
						const { company, dates, description } = job;
						return (
							<>
								<JobTitle>{company}</JobTitle>
								<SubDate>{dates}</SubDate>
								<p>{description}</p>
							</>
						);
					})}
				</div>
			</Info>
		</Layout>
	);
};

export default About;
