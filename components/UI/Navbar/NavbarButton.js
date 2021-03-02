import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primaryText};
	font-family: Merriweather;
	font-size: 18px;
	line-height: 152.2%;
	padding: 0 20px 0 20px;
	border-style: none;
	&:hover {
		color: ${({ theme }) => theme.colors.secondaryText};
		cursor: pointer;
	}
`;
const NavbarButton = ({ button }) => {
	return <StyledButton>{button}</StyledButton>;
};

export default NavbarButton;
