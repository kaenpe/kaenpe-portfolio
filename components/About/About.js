import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';
import Image from 'next/image';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.thirdBackground};
	overflow: hidden;
`;

const StyledUpperText = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	text-align: center;
	z-index: 102;
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
	transform: opacity;
	transform: ${({ visible }) =>
		visible === 'show' ? 'translateX(0)' : 'translateX(40vw)'};
	transition-duration: 1s;
	font-size: 2.5vw;
`;

const StyledDivider = styled.div`
	width: 100%;
	height: 2px;
	background-color: #636363;
	position: relative;
	z-index: 102;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;
const StyledImageWrap = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	@media (max-height: 900px) {
		height: 200px;
		width: 200px;
	}
	@media (max-height: 600px) {
		height: 150px;
		width: 150px;
	}
	@media (max-width: 750px) {
		height: 200px;
		width: 200px;
	}
	@media (max-width: 550px) {
		height: 150px;
		width: 150px;
	}
`;
const StyledUpperWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 50%;
	align-items: center;
`;

const StyledLowerWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 50%;
	align-items: center;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	z-index: 102;
	width: 70%;
	font-size: 2vw;
`;

const StyledAvatar = styled(Image)`
	position: absolute;
`;

const StyledParagraph = styled.p`
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
	display: inline-block;
	margin: 1rem;
	transform: opacity;
	transform: ${({ visible, side }) => {
		if (visible === 'show') {
			return 'translateX(0)';
		} else if (visible !== 'show' && side === 'left') {
			return 'translateX(-100vw)';
		} else if (visible !== 'show' && side === 'right') {
			return 'translateX(100vw)';
		}
	}};
	transition-duration: 1s;
	line-height: 1.2;
`;
const About = ({ aboutRef, setActive }) => {
	const [visible, setVisible] = useState('hide');
	const { inView, setRefs } = useRefInView(aboutRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
		inView ? setActive('ABOUT') : null;
	}, [inView]);
	return (
		<StyledAboutContainer ref={setRefs}>
			<StyledUpperWrap>
				<StyledImageWrap>
					<StyledAvatar alt='avatar' src='/av.jpg' layout='fill'></StyledAvatar>
				</StyledImageWrap>
				<StyledUpperText visible={visible}>
					HEY, I'M KAMIL - AN ASPIRING FULLSTACK DEVELOPER.
				</StyledUpperText>
			</StyledUpperWrap>
			<StyledDivider></StyledDivider>
			<StyledLowerWrap>
				<StyledParagraph side={'left'} visible={visible}>
					My name is Kamil Knap and I'm a fullstack developer from Poland. My
					goal is to eventually become a self-sustaining freelancer. Here you
					can find all of my work.
				</StyledParagraph>
				<StyledParagraph side={'right'} visible={visible}>
					Some of my strengths include front-end and back-end development,
					logical and strategic thinking, quickly finding solutions to
					encountered problems, desire to learn new technologies and both.
				</StyledParagraph>
				<StyledParagraph side={'left'} visible={visible}>
					Aside from programming, I'm a gaming enthusiast, a fan of fantasy
					genre in books, and a dog lover.{' '}
				</StyledParagraph>
			</StyledLowerWrap>
		</StyledAboutContainer>
	);
};

export default About;
