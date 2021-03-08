import { motion } from 'framer-motion';
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
	height: ${({ toggle }) => (toggle ? '50px' : '0')};
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
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 10/11;
	font-size: 18px;
	display: flex;
	width: 70px;
	border-style: none;
	transform: font-size;
	height: 25px;
	border-radius: 15px;
	color: ${({ theme }) => theme.colors.backgroundNavbar};
	background-color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
`;

const StyledCircle = styled(motion.div)`
	position: absolute;
	height: 25px;
	width: 25px;
	border-radius: 50%;
	left: 0;
	border: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};
	transform: left;
	transition-duration: 0.5s;
	background-color: ${({ theme }) => theme.colors.backgroundNavbar};
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => `${theme.colors.backgroundNavbar}95`};
	}
`;

const Navbar = ({ scrollToRef, active }) => {
	const [toggleNavbar, setToggleNavbar] = useState(true);
	const { lightTheme, setLightTheme } = useContext(ThemeContext);
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
			<StyledThemeSlider>
				<StyledCircle
					onClick={() => setLightTheme((prevState) => !prevState)}
					initial={{ left: lightTheme ? '0' : '45px' }}
					animate={{ left: lightTheme ? '45px' : '0' }}
					type={lightTheme}
				></StyledCircle>
			</StyledThemeSlider>
		</StyledNavContainer>
	);
};

export default Navbar;
