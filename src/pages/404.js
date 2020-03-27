import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Help from '../components/help';
import { Link } from 'gatsby';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<p>
			Right now, you can return to <Link to="/">home</Link> or click that button...
		</p>
		<p>The button won't do anything, it'll just count how many times you've pressed it.</p>
		<p>Have fun and a good day!!</p>
		<Help />
	</Layout>
);

export default NotFoundPage;
