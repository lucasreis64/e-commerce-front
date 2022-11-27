import styled from "styled-components";
import { LoginContainer } from "../SignInPage/SignInStyled";
import { tempo } from "./SignUpPage"; 
import { deslizarCima, tremerZoom } from "../../services/animations";

export const CadastroContainer = styled(LoginContainer)`
    animation: ${deslizarCima} ${tempo};
	img {
		animation: ${deslizarCima} ${tempo}, ${tremerZoom} ${"500ms"} 1 ${tempo};
	}
	input {
		animation: ${deslizarCima} ${tempo};
	}
	input.check {
		animation: ${deslizarCima} ${tempo};
	}
	label {
		animation: ${deslizarCima} ${tempo};
	}
	button {
		animation: ${(props) => (props.loading ? "none" : deslizarCima)} ${tempo};
	}
	p {
		animation: ${deslizarCima} ${tempo};
	}
`;
