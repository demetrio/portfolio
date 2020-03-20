import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from '@emotion/styled';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
`;

const Subtitle = styled.h2`
	border-bottom: 1px solid red;
`;

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
		}
	`);

	const skills = data.allSkillsJson.edges;

	return (
		<Layout>
			<SEO title="Home" />
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
			<Subtitle>Skills</Subtitle>
			{skills.map(({ node: skill }) => {
				const { main, skills } = skill;
				return (
					<p key={main}>
						{main}: <span key={skill}>{skills.join(', ')}.</span>
					</p>
				);
			})}
		</Layout>
	);
};

export default About;
