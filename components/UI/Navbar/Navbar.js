import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavbarButton from './NavbarButton';

const StyledNavContainer = styled.nav`
	position: sticky;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ toggle }) => (toggle ? '5vh' : '0')};
	background-color: ${({ theme }) => theme.colors.background};
	z-index: 102;
	top: 0;
	transition-duration: 0.1s;
	transform: height;
	overflow: hidden;
`;

const StyledButtonList = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	margin: 0;
`;

const Navbar = ({ scrollToRef }) => {
	const [toggleNavbar, setToggleNavbar] = useState(true);

	useEffect(() => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				setToggleNavbar(true);
			} else {
				setToggleNavbar(false);
			}
			prevScrollpos = currentScrollPos;
		};
	}, []);
	const buttons = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'];
	return (
		<StyledNavContainer toggle={toggleNavbar}>
			<StyledButtonList>
				{buttons.map((button, id) => (
					<li key={id}>
						<NavbarButton
							id={id}
							scrollToRef={scrollToRef}
							button={button}
						></NavbarButton>
					</li>
				))}
			</StyledButtonList>
		</StyledNavContainer>
	);
};

export default Navbar;
