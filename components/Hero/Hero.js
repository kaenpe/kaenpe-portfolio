import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeroContainer = styled.main`
	width: 100%;
	height: 95vh;
	position: relative;
	background-color: #000000;
	mix-blend-mode: overlay;
`;
const Hero = () => {
	return (
		<StyledHeroContainer>
			<Image
				src={'/hero3.jpg'}
				layout='fill'
				style={{ position: 'relative', zIndex: '1' }}
			></Image>
		</StyledHeroContainer>
	);
};

export default Hero;
