import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledHeroContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	div {
		z-index: 1;
	}
	&:before {
		mix-blend-mode: overlay;
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.75);
		z-index: 100;
	}
`;

const StyledImage = styled(Image)`
	opacity: ${({ visible }) => (visible === 'show' ? '0.8' : '0')};
	transform: opacity;
	transition-duration: 1s;
`;

const StyledHeader = styled.h1`
	margin-top: 50px;
	display: inline;
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	z-index: 101;
`;
const Hero = ({ heroRef }) => {
	const [visible, setVisible] = useState('hide');
	const { inView, setRefs } = useRefInView(heroRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
	}, [inView]);
	useEffect(() => {
		setVisible('visible');
	}, []);
	return (
		<StyledHeroContainer ref={setRefs}>
			<StyledImage
				visible={visible}
				src={'/hero1.jpg'}
				layout='fill'
			></StyledImage>
			<StyledHeader>Welcome to my web development portfolio.</StyledHeader>
		</StyledHeroContainer>
	);
};

export default Hero;
