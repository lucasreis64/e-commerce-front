import { useState } from "react";
import { URLS } from "../../services/constants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { carregamento } from "../../services/animations";
import Swal from "sweetalert2";
import { CadastroContainer } from "./SignUpStyled";
import logoBlack from "../../img/logoBlack.png";

let tempoMs;

export default function SignUp(params) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [nome, setNome] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [loading, setLoading] = useState(false);
	tempoMs = 400;

	function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		const login = axios.post(URLS.SIGNUP, {
			email: email,
			name: nome,
			repeatPassword: repeatPassword,
			password: password,
		});
		login.then(() => navigate("/sign-in"));
		login.catch(({ response }) => {
			if (response.status === 409) {
				Swal.fire({
					icon: "error",
					title: "Conflito!",
					text: "Usuário já existe!",
					footer: "Tente novamente!",
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Erro desconhecido!",
					text: "Cheque sua conexão com a internet!",
					footer: "Tente novamente!",
				});
			}
			setLoading(false);
		});
	}

	return (
		<CadastroContainer>
			<img
				src={logoBlack}
				alt=''
			/>
			{!loading ? (
				<>
					<form
						action='/hoje'
						onSubmit={handleSubmit}
					>
						<input
							name='name'
							type='name'
							placeholder='nome'
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							required
						/>
						<input
							name='email'
							type='email'
							placeholder='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							name='password'
							type='password'
							placeholder='senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<input
							name='password'
							type='password'
							placeholder='Confirme a senha'
							value={repeatPassword}
							onChange={(e) => setRepeatPassword(e.target.value)}
							required
						/>
						<button>Cadastrar</button>
					</form>
					<Link to='/sign-in'>
						<p>Já tem uma conta? Entre agora!</p>
					</Link>
				</>
			) : (
				<>
					<form
						action='/hoje'
						onSubmit={handleSubmit}
					>
						<input
							name='name'
							type='name'
							placeholder='nome'
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							disabled
						/>
						<input
							name='email'
							type='email'
							placeholder='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled
						/>
						<input
							name='password'
							type='password'
							placeholder='senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							disabled
						/>
						<input
							name='password'
							type='password'
							placeholder='Confirme a senha'
							value={repeatPassword}
							onChange={(e) => setRepeatPassword(e.target.value)}
							disabled
						/>
						<button disabled>{carregamento}</button>
					</form>
					<Link to='/'>
						<p>Já tem uma conta? Entre agora!</p>
					</Link>
				</>
			)}
		</CadastroContainer>
	);
}

export function tempo() {
	tempoMs += 50;
	return tempoMs + "ms";
}
