import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 50vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #00000075;
`;

const StyledHeader = styled.h1`
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	width: 40%;
	text-align: center;
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	transform: opacity;
	transition-duration: 2s;
`;

const StyledDivider = styled.div`
	height: 90%;
	width: 1px;
	background-color: #eeeeee30;
	position: relative;
	z-index: 100;
`;

const About = ({ aboutRef }) => {
	const [visible, setVisible] = useState(false);
	const { inView, setRefs } = useRefInView(aboutRef);

	useEffect(() => {
		inView ? setVisible(true) : setVisible(false);
	}, [inView]);
	return (
		<StyledAboutContainer ref={setRefs}>
			<StyledHeader visible={visible}>Something about me.</StyledHeader>
			<StyledDivider></StyledDivider>
			<StyledHeader visible={visible}>
				Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
				Poland. My goal is to eventually become a self-reliant freelancer. Here
				you can find all of my work.
				{inView ? 'yes' : 'no'}
			</StyledHeader>
		</StyledAboutContainer>
	);
};

export default About;
