import { createGlobalStyle } from 'styled-components';
import Layout from '../components/UI/layout';
import ThemeContextProvider from '../context/ThemeContext';

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
