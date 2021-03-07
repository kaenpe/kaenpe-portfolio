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
	transition-duration: 2s;
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
					HEY, I'M KAMIL. A DEVELOPER WHO LOVES TO CODE.
				</StyledUpperText>
			</StyledUpperWrap>
			<StyledDivider></StyledDivider>
			<StyledLowerWrap>
				<StyledBottomText>
					{/* Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
					Poland. My goal is to eventually become a self-reliant freelancer.
					Here you can find all of my work. */}
					<StyledParagraph side={'left'} visible={visible}>
						As an art director, designer and front-end developer, I have been
						building interactive experiences, creating brands and designing
						print materials for over eight years. I’m a fan of structure and
						simplicity in both design and code; organization and consistency are
						very important to me. <br />
						<br />
					</StyledParagraph>
					<StyledParagraph side={'right'} visible={visible}>
						{' '}
						A few of my strengths are creative concept and strategy development,
						art direction, creative direction, UI/UX design, front-end
						development, typography, and bridging communication between
						developers and designers. <br /> <br />
					</StyledParagraph>
					<StyledParagraph side={'left'} visible={visible}>
						{' '}
						I find inspiration in nature, architecture, vintage fashion, indie
						electronica, science fiction and good lattes. When I’m not working,
						you can find me at a local coffee house, exploring indie art fairs,
						kickboxing, or even enjoying an old-fashioned cocktail.
					</StyledParagraph>
				</StyledBottomText>
			</StyledLowerWrap>
		</StyledAboutContainer>
	);
};

export default About;
