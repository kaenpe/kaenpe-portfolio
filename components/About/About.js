import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 50vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		width: 50%;
		height: 100%;
		left: 0;
		background-color: ${({ theme }) => theme.colors.thirdBackground};
		z-index: 101;
	}
`;

const StyledUpperText = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	width: 40%;
	text-align: center;
	z-index: 102;
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
	transform: opacity;
	transform: ${({ visible }) =>
		visible === 'show' ? 'translateX(0)' : 'translateX(-40vw)'};
	transition-duration: 1s;
`;

const StyledBottomText = styled(StyledUpperText)`
	transform: ${({ visible }) =>
		visible === 'show' ? 'translateX(0)' : 'translateX(40vw)'};
	color: ${({ theme }) => theme.colors.primaryText};
	z-index: 102;
`;

const StyledDivider = styled.div`
	height: 100%;
	width: 2px;
	background-color: #636363;
	position: relative;
	z-index: 102;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
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
			<StyledUpperText visible={visible}>
				HEY, I'M KAMIL. A DEVELOPER WHO LOVES TO CODE.
			</StyledUpperText>
			<StyledDivider></StyledDivider>
			<StyledBottomText visible={visible}>
				Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
				Poland. My goal is to eventually become a self-reliant freelancer. Here
				you can find all of my work.
			</StyledBottomText>
		</StyledAboutContainer>
	);
};

export default About;
