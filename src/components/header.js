import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/favicon.png';
import { HeaderContainer, HeaderInnerContainer, LogoContainer, LogoNavLink, NameNavLink, Nav, NavLink } from './header.styles';
import MobileNav from './mobile-nav';

const Header = ({ siteTitle }) => (
	<HeaderContainer>
		<HeaderInnerContainer>
			<LogoContainer to="/">
				<LogoNavLink>
					<img src={logo} className="logo" alt="avatar" aria-label="Demetrio Alvarez Avatar" />
				</LogoNavLink>
				<NameNavLink fontWeight="bold" aria-label="Go to Main Page">
					{siteTitle}
				</NameNavLink>
			</LogoContainer>

			<Nav>
				<MobileNav />
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
		</HeaderInnerContainer>
	</HeaderContainer>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
