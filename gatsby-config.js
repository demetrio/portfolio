module.exports = {
	siteMetadata: {
		title: `Demetrio Alvarez`,
		description: `Demetrio Alvarez - Front End Developer`,
		siteUrl: 'https://demetrio.dev',
		author: `Demetrio Alvarez`,
		keywords: ['Demetrio', 'Alvarez', 'Portfolio', 'Developer', 'FrontEnd'],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `project`,
				path: `./data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `skills`,
				path: `./data`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Demetrio.dev`,
				short_name: `demetrio`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/about/`, `/projects/`],
			},
		},
	],
};
