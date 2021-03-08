import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
const StyledLayout = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	height: 100%;
	width: 100%;
`;

const theme = (lightTheme) => {
	let theme = {};
	lightTheme === true
		? (theme.colors = {
				background: '#313233',
				secondBackground: '#0b0b0c',
				thirdBackground: '#cccccc',
				backgroundNavbar: '#BDBDBD',
				primaryText: '#080808',
				secondaryText: '#0b0b0c',
				navbarText: 'rgb(83, 11, 33)',
		  })
		: (theme.colors = {
				background: '#0b0b0c',
				secondBackground: '#313233',
				thirdBackground: '#151617',
				backgroundNavbar: '#080808',
				primaryText: '#BDBDBD',
				secondaryText: '#0b0b0c',
				navbarText: 'rgb(83, 11, 33)',
		  });
	return theme;
};

const Layout = ({ children }) => {
	const { lightTheme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={theme(lightTheme)}>
			<StyledLayout>{children}</StyledLayout>
		</ThemeProvider>
	);
};

export default Layout;
