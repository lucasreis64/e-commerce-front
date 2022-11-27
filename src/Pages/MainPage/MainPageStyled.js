import styled from "styled-components";

export const Container = styled.div`
	background-color: #514c4c;
`;

export const PrincipalStyled = styled.div`
	display: flex;
	flex-flow: column nowrap;
	background-color: #514c4c;
	margin-bottom: 10%;

	h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 250px;
		height: 60px;
		margin: auto;
		margin-top: 25px;
		margin-bottom: 25px;
		background-color: #ff3b43;
		border: 1px solid black;
		box-shadow: 5px 8px 3px black;
		font-size: 25px;
		color: white;
	}
`;
