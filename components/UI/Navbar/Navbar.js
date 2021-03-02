import React from 'react';
import styled from 'styled-components';
import NavbarButton from './NavbarButton';

const StyledNavContainer = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5vh;
	background-color: ${({ theme }) => theme.colors.background};
`;

const StyledButtonList = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	margin: 0;
`;

const StyledNavHeader = styled.h1`
	font-family: Merriweather;
	color: ${({ theme }) => theme.colors.primaryText};
	margin: 0;
	padding: 0 20px 0 20px;
	&:hover {
		color: ${({ theme }) => theme.colors.secondaryText};
		cursor: pointer;
	}
`;
const Navbar = () => {
	const buttons = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'];
	return (
		<StyledNavContainer>
			<StyledNavHeader>My Portfolio</StyledNavHeader>
			<StyledButtonList>
				{buttons.map((button) => (
					<li>
						<NavbarButton button={button}></NavbarButton>
					</li>
				))}
			</StyledButtonList>
		</StyledNavContainer>
	);
};

export default Navbar;
