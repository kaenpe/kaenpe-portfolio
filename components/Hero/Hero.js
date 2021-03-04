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

const StyledHeader = styled.h1`
	display: inline;
	position: relative;
	z-index: 101;
	font-weight: bold;
	font-size: 12rem;
	word-spacing: 0.2em;
	margin: 0;
`;
const StyledMiddle = styled.h3`
	display: inline;
	position: relative;
	z-index: 101;
	float: right;
	font-weight: bold;
	color: #0b0b0c;
	font-size: 6rem;
	margin: 0;
	font-size: 72px;
	span {
		height: 50%;
		position: absolute;
		color: #313233;
		overflow: hidden;
	}
`;
const Hero = ({ heroRef, setActive }) => {
	const [visible, setVisible] = useState('hide');
	const { inView, setRefs } = useRefInView(heroRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
		inView ? setActive('HOME') : null;
	}, [inView]);

	return (
		<StyledHeroContainer ref={setRefs}>
			<StyledHeader>
				<span className='first' style={{ color: '#313233' }}>
					KAMIL{' '}
				</span>
			</StyledHeader>
			<StyledMiddle>
				<span>WEB DEVELOPMENT DESIGN FREELANCE</span>
				WEB DEVELOPMENT DESIGN FREELANCE
			</StyledMiddle>
			<StyledHeader>
				<span className='second' style={{ color: '#0b0b0c' }}>
					KNAP{' '}
				</span>
			</StyledHeader>
		</StyledHeroContainer>
	);
};

export default Hero;
