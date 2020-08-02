import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/favicon.png';
import { HeaderContainer, LogoNavLink, Nav, NavLink } from './header.styles';

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<NavLink to="/" className="title" fontWeight="bold" aria-label="Go to Main Page">
			{siteTitle}
		</NavLink>
		<LogoNavLink to="/">
			<img src={logo} className="logo" alt="avatar" aria-label="Demetrio Alvarez Avatar" />
		</LogoNavLink>
		<Nav>
			<NavLink to="/" activeClassName="current-page" aria-label="Go to Main Page">
				Home
			</NavLink>
			<NavLink to="/about/" activeClassName="current-page" aria-label="Go to About Page">
				About
			</NavLink>
			<NavLink to="/projects/" activeClassName="current-page" aria-label="Go to Projects Page">
				Portfolio
			</NavLink>
		</Nav>
	</HeaderContainer>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
