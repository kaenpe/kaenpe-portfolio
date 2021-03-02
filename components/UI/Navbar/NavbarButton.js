import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primaryText};
	font-size: 18px;
	margin: 0 25px 0 25px;
	border-style: none;
	transition-duration: 0.5s;
	transform: font-size;
	outline: none;
	&:hover {
		color: ${({ theme }) => theme.colors.secondaryText};
		cursor: pointer;
		font-size: 21px;
	}
`;
const NavbarButton = ({ button, scrollToHero, homeRef, aboutRef }) => {
	const checkButton = () => {
		if (button === 'HOME') scrollToHero(homeRef);
		else if (button === 'ABOUT') scrollToHero(aboutRef);
	};
	return <StyledButton onClick={checkButton}>{button}</StyledButton>;
};

export default NavbarButton;