import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-between;
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
	height: ${({ main }) => (main ? '60%' : '50%')};
	grid-column: ${({ main }) => (main ? 2 : 3)};
	left: ${({ main }) => (main ? 'auto' : '-50%')};
	z-index: ${({ main }) => (main ? 101 : 100)};
	transform: height;
	transition-duration: 1s;
	background-color: ${({ theme }) => theme.colors.secondBackground};
	border: 1px solid ${({ theme }) => theme.colors.background};
	width: 100%;
	position: relative;
	justify-self: center;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	grid-row: 1;

	.divider {
		width: 100%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.background};
	}
	.upperHalf {
		height: 50%;
	}
	.lowerHalf {
		height: 50%;
	}
`;

const StyledCardContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	height: 100%;
	width: 50%;
	background-color: ${({ theme }) => theme.colors.background};
`;
const Product = ({ productsRef, setActive }) => {
	const [visible, setVisible] = useState(false);
	const [toggleCard, setToggleCard] = useState(true);
	const { inView, setRefs } = useRefInView(productsRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
		inView ? setActive('SHOWCASE') : null;
	}, [inView]);

	const changeMainCard = () => {
		setToggleCard((prevState) => !prevState);
	};
	return (
		<StyledAboutContainer ref={setRefs}>
			<StyledCardContainer>
				<StyledCard main={toggleCard} onClick={changeMainCard}>
					<div className='upperHalf'>kamcio</div>
					<div className='divider'></div>
					<div className='lowerHalf'></div>
				</StyledCard>
				<StyledCard main={!toggleCard} onClick={changeMainCard}>
					<div className='upperHalf'>pancio</div>
					<div className='divider'></div>
					<div className='lowerHalf'></div>
				</StyledCard>
			</StyledCardContainer>
			<StyledDivider></StyledDivider>
			<StyledHeader visible={visible}>sd</StyledHeader>
		</StyledAboutContainer>
	);
};

export default Product;
