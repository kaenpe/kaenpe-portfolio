import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background-color: ${({ active, button }) => {
		if (button === 'HOME' && active === 'HOME') return '#ffffff30';
		if (button === 'ABOUT' && active === 'ABOUT') return '#ffffff30';
		if (button === 'PRODUCTS' && active === 'PRODUCTS') return '#ffffff30';
		if (button === 'CONTACT' && active === 'CONTACT') return '#ffffff30';
		else return 'transparent';
	}};
	color: ${({ theme }) => theme.colors.primaryText};
	font-size: 18px;
	width: 150px;
	border-style: none;
	transition-duration: 0.5s;
	transform: font-size;
	outline: none;
	height: 100%;
	&:hover {
		color: ${({ theme }) => theme.colors.secondaryText};
		cursor: pointer;
		font-size: 21px;
	}
`;
const NavbarButton = ({ button, scrollToRef, id, active }) => {
	return (
		<StyledButton
			active={active}
			button={button}
			onClick={() => scrollToRef(id)}
		>
			{button}
		</StyledButton>
	);
};

export default NavbarButton;
