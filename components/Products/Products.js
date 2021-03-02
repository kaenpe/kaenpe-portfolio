import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeroContainer = styled.main`
	width: 100%;
	height: 95vh;
	position: relative;
	display: flex;
	justify-content: center;
	div {
		z-index: 1;
	}
	&:before {
		mix-blend-mode: darken;
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.75);
		z-index: 100;
	}
`;

const StyledImage = styled(Image)``;

const StyledHeader = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	margin-top: 100px;
	position: relative;
	isolation: isolate;
	z-index: 101;
	display: inline;
`;
const Products = ({ productsRef }) => {
	return (
		<StyledHeroContainer ref={productsRef}>
			<StyledImage src={'/hero3.jpg'} layout='fill'></StyledImage>
			<StyledHeader>Welcome to my development portfolio.</StyledHeader>
		</StyledHeroContainer>
	);
};

export default Products;
