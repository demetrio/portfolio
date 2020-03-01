import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hello!</h1>
			<p>My name is Demetrio</p>
			<p>Have a nice day!</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
		</Layout>
	);
};

export default IndexPage;
