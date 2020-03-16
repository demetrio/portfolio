import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import dimensions from '../styles/dimensions';
import colors from '../styles/colors';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';

import styled from '@emotion/styled';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
	max-width: ${dimensions.maxWidthIndex}px;

	@media (max-width: ${dimensions.maxwidthMobile}px) {
		font-size: 2em;
	}

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
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Fade left>
				<Welcome>
					Hi! I'm Demetrio and I'm a Front End Developer. Here you can find out more <Link to="/about/">about me</Link>, see my{' '}
					<Link to="/projects/">portfolio</Link> and my code at <a href="https://github.demetrio.dev">Github</a> or add me to{' '}
					<a href="https://linkedin.demetrio.dev">LinkedIn</a>.
				</Welcome>
			</Fade>
		</Layout>
	);
};

export default IndexPage;
