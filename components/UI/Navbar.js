import React from 'react';
import styled from 'styled-components';

const StyledNavContainer = styled.nav`
	width: 100%;
	height: 50px;
	background: linear-gradient(
			180deg,
			rgba(4, 4, 4, 0.58) 3.65%,
			rgba(12, 10, 15, 0.297838) 46.35%,
			rgba(36, 33, 44, 0) 100%
		),
		#0b0b0c;
	mix-blend-mode: normal;
`;
const Navbar = () => {
	return <StyledNavContainer></StyledNavContainer>;
};

export default Navbar;
