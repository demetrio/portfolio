import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const NavLink = styled(Link)`
	color: #222;
	font-size: 1rem;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
		sans-serif;
	font-weight: ${props => props.fontWeight || 'normal'};
	line-height: 1;
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none;
	&.current-page {
		border-bottom: 2px solid #222;
	}
	&:last-of-type {
		margin-right: 0;
	}
`;

const Header = ({ siteTitle }) => (
	<header
		css={css`
			display: flex;
			justify-content: space-between;
			padding: 1rem calc((100vw - 960px) / 2);
		`}
	>
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
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
