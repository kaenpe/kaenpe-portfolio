import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	height: 100%;
	width: 100%;
`;
const Layout = ({ children }) => {
	return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
