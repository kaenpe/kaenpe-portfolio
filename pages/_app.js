import { createGlobalStyle } from 'styled-components';
import Layout from '../components/UI/layout';
import ThemeContextProvider from '../context/ThemeContext';

const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;

	@media (max-height: 780px) {
		font-size: 10px;
	}
	@media (max-height: 330px) {
		font-size: 6px;
	}
	@media (max-width: 970px) {
		font-size: 10px;
	}
	@media (max-width: 750px) {
		font-size: 6px;
	}
	@media (max-width: 370px){
		font-size: 5px;
	}
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

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeContextProvider>
		</>
	);
}
