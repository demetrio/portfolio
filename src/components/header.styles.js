import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import { MainContainer } from './layout.styles';

export const HeaderContainer = styled.header`
	position: sticky;
	top: 0px;
	width: 100%;
	background: rgba(255, 255, 255, 0.9) none repeat scroll 0% 0%;
	box-shadow: 0 3px 15px rgba(255, 255, 255, 0.2);
	z-index: 30;
`;

export const HeaderInnerContainer = styled(MainContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1.5em;
	padding-bottom: 1.5em;
`;

export const LogoContainer = styled(Link)`
	height: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
`;

export const LogoNavLink = styled.div`
	width: 2rem;
	height: 2rem;
	border: 0.125rem solid white;
	overflow: hidden;
	box-shadow: 0 0 0 0.125rem ${colors.purple200};
	border-radius: 50%;
	padding: 0;
	display: inline-block;

	.logo {
		width: auto;
	}
`;

export const NameNavLink = styled.div`
	margin-left: 10px;
	display: inline;
	color: ${colors.black600};
`;

export const Nav = styled.nav`
	margin-top: 0;
`;

export const NavLink = styled(Link)`
	display: none;
	color: ${colors.black600};
	font-size: 1rem;
	font-family: Roboto, -apple-system, Helvetica Neue, sans-serif;
	font-weight: ${props => props.fontWeight || 'normal'};
	line-height: 1;
	margin: 0 0.5rem 0 0;
	text-decoration: none;
	padding: 0.25rem 0 0.25rem;

	&.current-page {
		border-bottom: 2px solid ${colors.black600};
	}
	&:last-of-type {
		margin-right: 0;
	}

	@media (min-width: ${dimensions.maxwidthMobile}px) {
		display: inline;
	}
`;
