import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MobileNavContainer, MenuButton, XMenuButton, MainContainer, LinksContainer } from './mobile-nav.styles';

const MobileNav = () => {
	const [isToggledOn, setToggle] = useState(false);
	const toggle = () => setToggle(!isToggledOn);

	return (
		<MobileNavContainer>
			<MenuButton onClick={toggle} aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}>
				<XMenuButton isToggledOn={isToggledOn} />
			</MenuButton>
			{isToggledOn && (
				<MainContainer>
					<LinksContainer>
						<Link to="/" activeClassName="current-page" aria-label="Go to Main Page">
							Home
						</Link>
						<Link to="/about/" activeClassName="current-page" aria-label="Go to About Page">
							About
						</Link>
						<Link to="/projects/" activeClassName="current-page" aria-label="Go to Projects Page">
							Portfolio
						</Link>
					</LinksContainer>
				</MainContainer>
			)}
		</MobileNavContainer>
	);
};

export default MobileNav;
