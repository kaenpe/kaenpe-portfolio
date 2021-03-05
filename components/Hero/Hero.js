import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledHeroContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 50vh;
		bottom: 0;
		background-color: #151617;
	}
`;
const StyledTextContainer = styled.div`
	width: 50%;
	position: relative;
	height: 60%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
const StyledHeader = styled.h1`
	display: inline;
	position: relative;
	z-index: 101;
	font-weight: bold;
	font-size: 12rem;
	word-spacing: 0.2em;
	margin: 0;
	color: ${({ color }) => color};
`;
const StyledMiddleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 101;
	height: 20%;
	bottom: 40%;
	right: 20%;
`;

const StyledMiddle = styled.h3`
	display: inline;
	position: relative;
	z-index: 101;
	float: right;
	font-weight: bold;
	color: ${({ color }) => color};
	font-size: 2rem;
	margin: 0;
`;

const StyledArrow = styled.div`
	width: 0;
	height: 0;
	position: absolute;
	border-left: 40px solid transparent;
	border-right: 40px solid transparent;
	z-index: 101;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	border-top: 40px solid #0b0b0c;
	bottom: 0;
	&:after {
		content: '';
		width: 0;
		height: 0;
		border-left: 25px solid transparent;
		border-right: 25px solid transparent;
		z-index: 101;
		border-top: 25px solid #313233;
	}
`;
const Hero = ({ heroRef, setActive }) => {
	const { inView, setRefs } = useRefInView(heroRef);

	useEffect(() => {
		inView ? setActive('HOME') : null;
	}, [inView]);

	return (
		<StyledHeroContainer ref={setRefs}>
			<StyledTextContainer>
				<StyledHeader color='#313233'>KAMIL </StyledHeader>
				<StyledMiddleContainer>
					<StyledMiddle color={'#313233'}>WEB </StyledMiddle>
					<StyledMiddle color={'#0b0b0c'}>DEVELOPMENT</StyledMiddle>
				</StyledMiddleContainer>
				<StyledHeader color='#0b0b0c'>KNAP </StyledHeader>
				<StyledArrow></StyledArrow>
			</StyledTextContainer>
		</StyledHeroContainer>
	);
};

export default Hero;
