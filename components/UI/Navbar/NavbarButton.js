import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background-color: ${({ active, button, theme }) =>
		button === active ? `${theme.colors.primaryText}50` : 'transparent'};
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
