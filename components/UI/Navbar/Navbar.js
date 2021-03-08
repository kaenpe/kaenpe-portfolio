import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../context/ThemeContext';
import NavbarButton from './NavbarButton';

const StyledNavContainer = styled.nav`
	position: fixed;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${({ toggle }) => (toggle ? '5vh' : '0')};
	background-color: ${({ theme }) => theme.colors.backgroundNavbar};
	z-index: 999;
	top: 0;
	transition-duration: 0.1s;
	transform: height;
	overflow: hidden;
`;

const StyledButtonList = styled.ul`
	grid-column: 4/8;
	width: 100%;
	grid-gap: 30px;
	list-style-type: none;
	margin: 0;
	padding: 0;
	height: 100%;
`;

const StyledThemeSlider = styled.div`
	grid-column: 10/11;
	font-size: 18px;
	display: flex;
	width: 100%;
	border-style: none;
	transform: font-size;
	height: 100%;
`;

const Navbar = ({ scrollToRef, active }) => {
	const [toggleNavbar, setToggleNavbar] = useState(true);
	const { setLightTheme } = useContext(ThemeContext);
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
			<StyledThemeSlider
				onClick={() => setLightTheme((prevState) => !prevState)}
			></StyledThemeSlider>
		</StyledNavContainer>
	);
};

export default Navbar;
