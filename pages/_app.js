import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/UI/layout';
import ThemeContextProvider from '../context/ThemeContext';

const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Spartan', sans-serif;
  font-size: 16px;
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
			<Head>
				<title>Kamil Knap's portfolio</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			<GlobalStyle />
			<ThemeContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeContextProvider>
		</>
	);
}
