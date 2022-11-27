import styled from "styled-components";
import { deslizarCima, tremerZoom } from "../../services/animations";
import { tempo } from "./SignInPage";

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	box-sizing: border-box;
	background-color: ${(props) => (props.noturno ? "#1C1C1C" : "black")};
	height: 100%;
	width: 100%;
	animation: ${deslizarCima} ${tempo};
	img {
		filter: drop-shadow(0px 12px 11px #224796);
		width: 100px;
		animation: ${deslizarCima} ${tempo}, ${tremerZoom} ${"500ms"} 1 ${tempo};
		margin-bottom: 15%;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 80%;
		height: 50%;
		gap: 10px;
	}
	input {
		padding-left: 8px;
		height: 45px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		box-sizing: border-box;
		animation: ${deslizarCima} ${tempo};
		outline: none;
		filter: drop-shadow(0px 16px 11px #224796);
		&::placeholder {
			font-weight: 400;
			font-size: 20px;
			color: #443828;
			font-family: "Lexend Deca";
		}
	}
	input.check {
		width: 15px;
		height: 15px;
		margin-left: 10px;
		animation: ${deslizarCima} ${tempo};
		filter: drop-shadow(0px 16px 11px #224796);
	}
	label {
		font-size: 15px;
		color: white;
		animation: ${deslizarCima} ${tempo};
	}
	button {
		font-family: "Lexend Deca";
		width: 100%;
		height: 45px;
		color: white;
		background-color: #224796;
		border-radius: 4.63636px;
		border: none;
		filter: drop-shadow(0px 6px 11px #224796);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: ${(props) => (props.loading ? "none" : deslizarCima)} ${tempo};
	}
	p {
		margin-top: 25px;
		font-family: "Lexend Deca";
		text-decoration: underline;
		font-weight: bold;
		font-size: 17px;
		color: #224796 !important;
		color: #52b6ff;
		animation: ${deslizarCima} ${tempo};
		filter: drop-shadow(0px 16px 11px #224796);
	}
`;
