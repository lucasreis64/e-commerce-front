import styled from "styled-components";

export const FootBarStyled = styled.div`
	margin-top: 30px;
	width: 100%;
	height: fit-content;
	background-color: #2b2d42;
	position: absolute;
	left: 0px;
	color: #edf2f4;
`;

export const Categorias = styled.div`
	display: flex;
	justify-content: space-around;

	p {
		margin-top: 5%;
		color: #ef233c;
	}
`;

export const OutrasInformacoes = styled.div`
	margin: 7%;
`;

export const RedesSociais = styled.div`
	p {
		margin: 5%;
		color: #ef233c;
	}

	img {
		width: 40px;
		height: 40px;
		margin: 5%;
		margin-left: 10%;
	}
`;

export const Icons = styled.div`
	display: flex;
	justify-content: space-evenly;

	img {
		width: 40px;
		height: 40px;
	}
`;
