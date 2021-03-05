import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/UI/layout';

const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: rgb(63, 63, 63);
}

* {
  box-sizing: border-box;
}

`;

const theme = {
	colors: {
		background: '#0b0b0c',
		secondBackground: '#313233',
		thirdBackground: '#151617',
		backgroundNavbar: '#080808',
		primaryText: '#BDBDBD',
		secondaryText: '#0b0b0c',
		navbarText: 'rgb(83, 11, 33)',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
