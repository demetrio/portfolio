import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, pathname }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						keywords
						siteUrl
						image
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const image = site.siteMetadata.image;
	const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			link={
				canonical
					? [
							{
								rel: 'canonical',
								href: canonical,
							},
					  ]
					: []
			}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: 'keywords',
					content: site.siteMetadata.keywords.join(','),
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: image,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	pathname: PropTypes.string,
};

export default SEO;
