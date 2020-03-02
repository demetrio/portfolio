import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from '@emotion/styled';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Welcome>
				Hi! I'm Demetrio and I'm a Front End Developer. Here you can know more <Link to="/projects">about me</Link>, see my{' '}
				<Link to="/projects">portfolio</Link> and the code at <a href="https://github.demetrio.dev">Github</a> or add me to{' '}
				<a href="https://github.demetrio.dev">LinkedIn</a>.
			</Welcome>
		</Layout>
	);
};

export default IndexPage;
