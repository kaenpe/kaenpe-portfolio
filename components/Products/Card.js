import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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
				main === type ? 'transparent' : `${theme.colors.background}80`};
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
const Card = ({ main, type, changeCard }) => {
	return (
		<StyledCard main={main} type={type} onClick={() => changeCard(type)}>
			<div className='upperHalf'>
				<Image src={`/${type}.png`} layout='fill' objectFit='cover'></Image>
			</div>

			<div className='lowerHalf'></div>
		</StyledCard>
	);
};

export default Card;
