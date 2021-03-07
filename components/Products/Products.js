import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRefInView from '../../hooks/useRefInView';

const StyledAboutContainer = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #00000050;
`;

const StyledHeader = styled.h1`
	color: ${({ theme }) => theme.colors.primaryText};
	position: relative;
	width: 40%;
	text-align: center;
	opacity: ${({ visible }) => (visible === 'show' ? 1 : 0)};
	transform: opacity;
	transition-duration: 2s;
`;

const StyledDivider = styled.div`
	height: 90%;
	width: 1px;
	background-color: #eeeeee50;
	position: relative;
	z-index: 100;
`;

const Product = ({ productsRef, setActive }) => {
	const [visible, setVisible] = useState('hide');
	const { inView, setRefs } = useRefInView(productsRef);

	useEffect(() => {
		inView ? setVisible('show') : setVisible('hide');
		inView ? setActive('SHOWCASE') : null;
	}, [inView]);
	return (
		<StyledAboutContainer ref={setRefs}>
			<StyledHeader visible={visible}>Something about me.</StyledHeader>
			<StyledDivider></StyledDivider>
			<StyledHeader visible={visible}>
				Hi, my name is Kamil Knap and I'm an aspiring fullstack developer from
				Poland. My goal is to eventually become a self-reliant freelancer. Here
				you can find all of my work.
			</StyledHeader>
		</StyledAboutContainer>
	);
};

export default Product;
