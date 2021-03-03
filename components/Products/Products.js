import React from 'react';
import styled from 'styled-components';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 50vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #00000050;
`;

const StyledHeader = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	width: 40%;
	text-align: center;
`;

const StyledDivider = styled.div`
	height: 90%;
	width: 1px;
	background-color: #eeeeee50;
	position: relative;
	z-index: 100;
`;

const Product = ({ productsRef }) => {
	return (
		<StyledAboutContainer ref={productsRef}>
			<StyledHeader>Some words about me</StyledHeader>
			<StyledDivider></StyledDivider>
			<StyledHeader>
				Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
				Poland. My goal is to eventually become a self-reliant freelancer. Here
				you can find my
			</StyledHeader>
		</StyledAboutContainer>
	);
};

export default Product;
