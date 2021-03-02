import React from 'react';
import styled from 'styled-components';
import NavbarButton from './NavbarButton';

const StyledNavContainer = styled.nav`
	position: sticky;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5vh;
	background-color: ${({ theme }) => theme.colors.background};
	z-index: 102;
	top: 0;
`;

const StyledButtonList = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	margin: 0;
`;

const Navbar = ({ scrollToHero, elRef }) => {
	const buttons = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'];
	return (
		<StyledNavContainer>
			<StyledButtonList>
				{buttons.map((button, id) => (
					<li key={id}>
						<NavbarButton
							id={id}
							scrollToHero={scrollToHero}
							button={button}
						></NavbarButton>
					</li>
				))}
			</StyledButtonList>
		</StyledNavContainer>
	);
};

export default Navbar;
