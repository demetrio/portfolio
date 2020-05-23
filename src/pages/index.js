import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Welcome } from './index.styles';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Demetrio Alvarez - Front End Developer" />
			<Welcome>
				Hi! I'm Demetrio and I'm a Front End Developer. Here you can find out more <Link to="/about/">about me</Link>, send me{' '}
				<a href="mailto:contact@demetrio.dev">an email</a>, see my <Link to="/projects/">portfolio</Link> and my code at{' '}
				<a href="https://github.demetrio.dev">Github</a> or add me to <a href="https://linkedin.demetrio.dev">LinkedIn</a>.
			</Welcome>
		</Layout>
	);
};

export default IndexPage;
