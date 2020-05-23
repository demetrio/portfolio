import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1.25em 0 1.25em;

	@media (max-width: ${dimensions.maxwidthMobile}px) {
		.title {
			display: none;
		}
	}
`;

export const LogoNavLink = styled(Link)`
	width: 2rem;
	height: 2rem;
	border: 0.125rem solid white;
	overflow: hidden;
	box-shadow: 0 0 0 0.125rem ${colors.purple200};
	border-radius: 50%;
	padding: 0;

	.logo {
		width: 100%;
	}

	@media (min-width: ${dimensions.maxwidthMobile}px) {
		display: none;
	}
`;

export const NavLink = styled(Link)`
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
`;
