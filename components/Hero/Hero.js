import React, { useEffect } from 'react';
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
	font-size: 8vw;
	overflow: hidden;
	line-height: 1.3;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 50vh;
		bottom: 0;
		background-color: ${({ theme }) => theme.colors.secondBackground};
	}
`;
const StyledTextContainer = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
const StyledFirstName = styled.h1`
	display: inline;
	position: relative;
	z-index: 101;
	font-weight: bold;
	word-spacing: 0.2em;
	margin: 0;
	padding: 10px;
	color: ${({ theme }) => theme.colors.secondBackground};
	display: flex;
	justify-content: center;
	align-items: flex-end;

	&:hover {
		cursor: default;
	}
`;
const StyledSurname = styled(StyledFirstName)`
	color: ${({ theme }) => theme.colors.background};
	align-items: flex-start;
`;
const StyledArrow = styled.div`
	@keyframes jiggle {
		from {
			bottom: 10px;
		}
		50% {
			bottom: 0;
		} /* ignored */
		to {
			bottom: 10px;
		}
	}
	width: 0;
	height: 0;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	animation: jiggle 2s infinite ease;
	&:before {
		bottom: 0;
		content: '';
		position: absolute;
		border-left: 2vw solid transparent;
		border-right: 2vw solid transparent;
		z-index: 101;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border-top: ${({ theme }) => `2vw solid ${theme.colors.background}`};
		transform: z-index;
		transition-duration: 0.2s;
	}
	&:after {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		border-left: 1vw solid transparent;
		border-right: 1vw solid transparent;
		z-index: 102;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border-top: 1vw solid #151617;
		bottom: 0;
		transform: z-index;
		transition-duration: 0.2s;
	}

	&:hover {
		cursor: pointer;
		&:after {
			z-index: 101;
			border-left: 2vw solid transparent;
			border-right: 2vw solid transparent;
			border-top: 2vw solid #151617;
		}
		&:before {
			border-left: 1vw solid transparent;
			border-right: 1vw solid transparent;
			border-top: ${({ theme }) => `1vw solid ${theme.colors.background}`};
			z-index: 102;
		}
	}
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
	right: 0;
`;
const StyledMiddle = styled.h3`
	display: inline;
	position: relative;
	z-index: 101;
	float: right;
	font-weight: bold;
	color: ${({ upper, theme }) =>
		upper === true ? theme.colors.secondBackground : theme.colors.background};
	font-size: 3vw;
	margin: 0;
`;

const Hero = ({ heroRef, setActive, scrollToRef }) => {
	const { inView, setRefs } = useRefInView(heroRef);

	useEffect(() => {
		inView ? setActive('HOME') : null;
	}, [inView]);

	return (
		<StyledHeroContainer ref={setRefs}>
			<StyledTextContainer>
				<StyledFirstName>KAMIL</StyledFirstName>
				<StyledMiddleContainer>
					<StyledMiddle upper={true}>WEB </StyledMiddle>
					<StyledMiddle>DEVELOPMENT</StyledMiddle>
				</StyledMiddleContainer>
				<StyledSurname>
					KNAP
					<StyledArrow onClick={() => scrollToRef(1)}></StyledArrow>
				</StyledSurname>
			</StyledTextContainer>
		</StyledHeroContainer>
	);
};

export default Hero;
