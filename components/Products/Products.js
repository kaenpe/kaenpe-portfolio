import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';
import Image from 'next/image';
const StyledAboutContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.secondBackground};
`;

const StyledHeader = styled.h1`
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	width: 50%;
	text-align: center;
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
	transform: opacity;
	transition-duration: 2s;
`;

const StyledDivider = styled.div`
	height: 100vh;
	width: 1px;
	background-color: #eeeeee50;
	position: relative;
	z-index: 100;
`;

const StyledCard = styled.div`
	height: ${({ main, type }) => (main === type ? '80%' : '70%')};
	left: ${({ main, type }) => (main === type ? '0' : '10%')};
	z-index: ${({ main, type }) => (main === type ? 101 : 100)};
	background-color: ${({ theme }) => theme.colors.secondBackground};
	border: 1px solid ${({ theme }) => theme.colors.background};
	grid-column: 1;
	transform: left z-index;
	transition-duration: 0.5s;
	width: 70%;
	position: relative;
	justify-self: center;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	grid-row: 1;
	&:hover {
		&:after {
			content: '';
			position: absolute;
			inset: 0;
			height: 100%;
			width: 100%;
			border-radius: 10px;
			background-color: ${({ main, type, theme }) =>
				main === type ? 'transparent' : `${theme.colors.secondBackground}80`};
		}
	}
	.divider {
		width: 100%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.background};
	}
	.upperHalf {
		height: 60%;
		position: relative;
		img {
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
		}
	}
	.lowerHalf {
		height: 40%;
	}
`;

const StyledCardContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	height: 100%;
	width: 50%;
	background-color: ${({ theme }) => theme.colors.background};
`;
const Product = ({ productsRef, setActive }) => {
	const [visible, setVisible] = useState(false);
	const [toggleCard, setToggleCard] = useState('burger');
	const { inView, setRefs } = useRefInView(productsRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
		inView ? setActive('SHOWCASE') : null;
	}, [inView]);

	const changeMainCard = (type) => {
		if (type === 'burger' && toggleCard === 'voxel') setToggleCard('burger');
		if (type === 'voxel' && toggleCard === 'burger') setToggleCard('voxel');
	};
	return (
		<StyledAboutContainer ref={setRefs}>
			<StyledCardContainer>
				<StyledCard
					type={'burger'}
					main={toggleCard}
					onClick={() => changeMainCard('burger')}
				>
					<div className='upperHalf'>
						<Image src='/burger.png' layout='fill'></Image>
					</div>

					<div className='lowerHalf'></div>
				</StyledCard>
				<StyledCard
					type={'voxel'}
					main={toggleCard}
					onClick={changeMainCard}
					onClick={() => changeMainCard('voxel')}
				>
					<div className='upperHalf'>
						<Image src='/voxel.png' layout='fill'></Image>
					</div>

					<div className='lowerHalf'></div>
				</StyledCard>
			</StyledCardContainer>
			<StyledDivider></StyledDivider>
			<StyledHeader visible={visible}>sd</StyledHeader>
		</StyledAboutContainer>
	);
};

export default Product;
