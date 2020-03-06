import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from '@emotion/styled';

const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
	margin-bottom: 1em;
`;

const Hero = styled('div')`
	padding-top: 2.5em;
	padding-bottom: 3em;
	margin-bottom: 6em;
	max-width: 830px;
	@media (max-width: 600px) {
		margin-bottom: 3em;
	}
`;

const about = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Hero>
				<Welcome>Hi! I'm Demetrio!</Welcome>
			</Hero>
		</Layout>
	);
};

export default about;
