import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import colors from '../styles/colors';

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1.25em 0 1.25em;
	a {
		padding: 0.25rem 0 0.25rem;
	}
`;

const NavLink = styled(Link)`
	color: ${colors.black600};
	font-size: 1rem;
	font-family: Roboto, -apple-system, Helvetica Neue, sans-serif;
	font-weight: ${props => props.fontWeight || 'normal'};
	line-height: 1;
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none;

	&.current-page {
		border-bottom: 2px solid ${colors.black600};
	}
	&:last-of-type {
		margin-right: 0;
	}
`;

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<NavLink to="/" fontWeight="bold">
			{siteTitle}
		</NavLink>
		<nav
			css={css`
				margin-top: 0;
			`}
		>
			<NavLink to="/" activeClassName="current-page">
				Home
			</NavLink>
			<NavLink to="/about/" activeClassName="current-page">
				About
			</NavLink>
			<NavLink to="/projects/" activeClassName="current-page">
				Portfolio
			</NavLink>
		</nav>
	</HeaderContainer>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
