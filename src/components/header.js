import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import logo from '../images/favicon.png';
import { HeaderContainer, LogoNavLink, NavLink } from './header.styles';

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<NavLink to="/" className="title" fontWeight="bold">
			{siteTitle}
		</NavLink>
		<LogoNavLink to="/">
			<img src={logo} className="logo" alt="avatar" />
		</LogoNavLink>
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
