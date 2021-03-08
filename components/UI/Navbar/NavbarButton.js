import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background-color: ${({ active, button }) => {
		if (button === 'HOME' && active === 'HOME') return '#ffffff30';
		if (button === 'ABOUT' && active === 'ABOUT') return '#ffffff30';
		if (button === 'SHOWCASE' && active === 'SHOWCASE') return '#ffffff30';
		if (button === 'CONTACT' && active === 'CONTACT') return '#ffffff30';
		else return 'transparent';
	}};
	color: ${({ theme }) => theme.colors.primaryText};
	font-size: 18px;
	width: 80%;
	justify-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-style: none;
	transition-duration: 0.5s;
	transform: font-size;
	height: 100%;
	&:hover {
		color: ${({ theme }) => theme.colors.navbarText};
		cursor: pointer;
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
