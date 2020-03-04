import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import colors from '../styles/colors';

import styled from '@emotion/styled';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
`;

const Hero = styled('div')`
	padding-top: 2.5em;
	padding-bottom: 3em;
	margin-bottom: 6em;
	max-width: 830px;
	@media (max-width: 600px) {
		margin-bottom: 3em;
	}
	h1 {
		margin-bottom: 1em;
		a {
			text-decoration: none;
			transition: all 100ms ease-in-out;
			&:nth-of-type(1) {
				color: ${colors.teal500};
			}
			&:nth-of-type(2) {
				color: ${colors.orange500};
			}
			&:nth-of-type(3) {
				color: ${colors.purple500};
			}
			&:nth-of-type(4) {
				color: ${colors.blue500};
			}
			&:hover {
				cursor: pointer;
				transition: all 100ms ease-in-out;
				&:nth-of-type(1) {
					color: ${colors.teal600};
					background-color: ${colors.teal200};
				}
				&:nth-of-type(2) {
					color: ${colors.orange600};
					background-color: ${colors.orange200};
				}
				&:nth-of-type(3) {
					color: ${colors.purple600};
					background-color: ${colors.purple200};
				}
				&:nth-of-type(4) {
					color: ${colors.blue600};
					background-color: ${colors.blue200};
				}
			}
		}
	}
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Hero>
				<Welcome>
					Hi! I'm Demetrio and I'm a Front End Developer. Here you can find out more <Link to="/about/">about me</Link>, see my{' '}
					<Link to="/projects/">portfolio</Link> and my code at <a href="https://github.demetrio.dev">Github</a> or add me to{' '}
					<a href="https://github.demetrio.dev">LinkedIn</a>.
				</Welcome>
			</Hero>
		</Layout>
	);
};

export default IndexPage;
