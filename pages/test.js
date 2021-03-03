import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 50vw;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
	margin: 0 auto;
`;

const StyledUpperCircle = styled.div`
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	border-bottom-left-radius: 10%;
	border-bottom-right-radius: 10%;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;
	background-color: #f2ad43;
	position: relative;
	overflow: hidden;
`;

const StyledInnerCircle = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #fff58f;
	z-index: 1;
	position: relative;
`;

const StyledBottomCircle = styled.div`
	position: absolute;
	border-radius: 50%;
	height: 100%;
	width: 100%;
	background-color: ${({ color }) => color};
	bottom: -50%;
	z-index: ${({ color }) => (color === '#e08027' ? 1 : 2)};
	left: ${({ color }) => {
		if (color === '#e08027') {
			return '-50px';
		}
	}};
	right: ${({ color }) => {
		if (color === '#824b20') {
			return '-50px';
		}
	}};
`;
const test = () => {
	return (
		<>
			<StyledDiv>
				<StyledUpperCircle>
					<StyledInnerCircle></StyledInnerCircle>
					<StyledBottomCircle color={'#824b20'}></StyledBottomCircle>
					<StyledBottomCircle color={'#e08027'}></StyledBottomCircle>
				</StyledUpperCircle>
			</StyledDiv>
		</>
	);
};

export default test;
