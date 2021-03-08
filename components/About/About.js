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
	justify-content: space-evenly;
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
	font-size: 3rem;
`;

const StyledBottomText = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	z-index: 102;
	width: 70%;
	font-size: 1.5rem;
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
	height: 50%;
	align-items: center;
	text-align: center;
`;

const StyledAvatar = styled(Image)`
	position: absolute;
`;

const StyledParagraph = styled.p`
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
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
					HEY, I'M LOREM - IPSUM DOLOR SIT AMET.
				</StyledUpperText>
			</StyledUpperWrap>
			<StyledDivider></StyledDivider>
			<StyledLowerWrap>
				<StyledBottomText>
					{/* Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
					Poland. My goal is to eventually become a self-reliant freelancer.
					Here you can find all of my work. */}
					<StyledParagraph side={'left'} visible={visible}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</StyledParagraph>
					<StyledParagraph side={'right'} visible={visible}>
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</StyledParagraph>
					<StyledParagraph side={'left'} visible={visible}>
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</StyledParagraph>
				</StyledBottomText>
			</StyledLowerWrap>
		</StyledAboutContainer>
	);
};

export default About;
