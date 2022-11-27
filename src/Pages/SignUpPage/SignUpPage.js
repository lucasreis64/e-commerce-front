import { useState } from "react";
import { URLS } from "../../services/constants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { carregamento } from "../../services/animations";
import Swal from "sweetalert2";
import { CadastroContainer } from "./SignUpStyled";
import logoBlack from "../../img/logoBlack.png";

let tempoMs;

export default function SignUp(props) {
	const { onFirstLoad, setOnFirstLoad } = props;
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
		name: "",
		repeatPassword: "",
	});
	const [loading, setLoading] = useState(false);
	tempoMs = 400;

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		const config = {
			method: "post",
			data: { ...form },
		};
		const login = axios(URLS.SIGNUP, config);
		login.then(() => {
			setLoading(false);
			setOnFirstLoad(false);
			navigate("/sign-in");
		});
		login.catch(({ response }) => {
			if (response.status === 409) {
				Swal.fire({
					icon: "error",
					title: "Conflito!",
					text: "Usuário já existe!",
					footer: "Tente novamente!",
				});
			} else if (response.status === 422) {
				Swal.fire({
					icon: "error",
					title: "Erro!",
					text: response.errors,
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
		});
	}

	return (
		<CadastroContainer
			loading={loading}
			firstLoad={onFirstLoad}
		>
			<img
				src={logoBlack}
				alt=''
			/>
			<form
				action='/hoje'
				onSubmit={handleSubmit}
			>
				<input
					name='name'
					type='name'
					placeholder='nome'
					value={form.name}
					onChange={handleForm}
					required
				/>
				<input
					name='email'
					type='email'
					placeholder='email'
					value={form.email}
					onChange={handleForm}
					required
				/>
				<input
					name='password'
					type='password'
					placeholder='senha'
					value={form.password}
					onChange={handleForm}
					required
				/>
				<input
					name='repeatPassword'
					type='password'
					placeholder='Confirme a senha'
					value={form.repeatPassword}
					onChange={handleForm}
					required
				/>
				{loading ? carregamento : <button type='submit'>Cadastrar</button>}
			</form>
			<Link to='/sign-in'>
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
		</CadastroContainer>
	);
}

export function tempo() {
	tempoMs += 50;
	return tempoMs + "ms";
}
