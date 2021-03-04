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
	display: grid;
	grid-template-columns: 150px 150px 150px 150px;
	justify-content: center;
	width: 100%;
	align-items: center;
	grid-gap: 30px;
	list-style-type: none;
	margin: 0;
	padding: 0;
	height: 100%;
`;

const Navbar = ({ scrollToRef, active }) => {
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
	const buttons = ['HOME', 'ABOUT', 'SHOWCASE', 'CONTACT'];
	return (
		<StyledNavContainer toggle={toggleNavbar}>
			<StyledButtonList>
				{buttons.map((button, id) => (
					<NavbarButton
						key={id}
						active={active}
						id={id}
						scrollToRef={scrollToRef}
						button={button}
					></NavbarButton>
				))}
			</StyledButtonList>
		</StyledNavContainer>
	);
};

export default Navbar;
