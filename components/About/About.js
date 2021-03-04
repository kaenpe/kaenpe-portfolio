import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 50vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #00000075;
`;

const StyledUpperText = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.secondaryText};
	position: relative;
	width: 40%;
	text-align: center;
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
`;

const StyledDivider = styled.div`
	height: 1px;
	width: 40vw;
	background-color: #eeeeee10;
	position: relative;
	z-index: 100;
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
			<StyledUpperText visible={visible}>Something about me.</StyledUpperText>
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
