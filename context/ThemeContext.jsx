import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
	const [lightTheme, setLightTheme] = useState(false);
	export const value = { lightTheme, setLightTheme };
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
