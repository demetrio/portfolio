import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import dimensions from '../styles/dimensions';

import Header from './header';
import './layout.css';

const MainContainer = styled.div`
	margin: 0 auto;
	max-width: ${dimensions.maxwidthDesktop}px;
	padding-left: ${dimensions.paddingHorizontalDesktop}em;
	padding-right: ${dimensions.paddingHorizontalDesktop}em;

	@media (max-width: ${dimensions.maxwidthTablet}px) {
		padding-left: ${dimensions.paddingHorizontalTablet}em;
		padding-right: ${dimensions.paddingHorizontalTablet}em;
	}
	@media (max-width: ${dimensions.maxwidthMobile}px) {
		padding-left: ${dimensions.paddingHorizontalMobile}em;
		padding-right: ${dimensions.paddingHorizontalMobile}em;
	}
`;

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<MainContainer>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div style={{}}>
				<main>{children}</main>
			</div>
		</MainContainer>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
