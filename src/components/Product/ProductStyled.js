import styled from "styled-components";

export const ProductCard = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 320px;
	height: 200px;
	background-color: white;
	margin: auto;
	margin-bottom: 15px;
	box-shadow: 8px 8px 4px black;
	border: 1px solid black;
	border-radius: 5px;
`;

export const InnerContainer = styled.div`
	display: inherit;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 150px;
`;

export const ImageContainer = styled.div`
	background: ${(props) => `url(${props.img}) center/80px 50px no-repeat`};
	width: 80px;
	height: 50px;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 150px;
	margin-right: 10px;
`;
export const Title = styled.p`
	margin-bottom: 10px;
	text-align: center;
	font-size: 18px;
`;
export const Description = styled.p`
	margin-top: 15px;
	text-align: center;
	font-size: 16px;
	width: 150px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
`;

export const Price = styled.p`
	text-align: center;
	font-size: 20px;
	font-weight: 900;
	color: #d90429;
`;

export const AddToCart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 60px;
	margin-bottom: 10px;
	background-color: #ef233c;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	ion-icon {
		font-size: 26px;
		margin-right: 10px;
	}
	p {
		font-weight: 700;
	}
`;
