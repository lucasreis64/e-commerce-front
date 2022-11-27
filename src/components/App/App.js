import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../services/GlobalStyles";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { Screen, SmartPhoneContainer } from "./AppStyled";
import Sessao from "../Sessao/Sessao";
import Produto from "../Produto/Produto";
import Carrinho from "../Carrinho/Carrinho";
import Principal from "../Principal/Principal";
import NavBar from "../NavBar/NavBar";
import MinhaConta from "../MnhaConta/MinhaConta";

function App() {
	return (
		<Screen>
			<GlobalStyle />
			<SmartPhoneContainer>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route
							path='/sign-in'
							element={<SignIn />}
						/>
						<Route
							path='/sign-up'
							element={<SignUp />}
						/>
						<Route
							path='/'
							element={<Principal />}
						/>
						<Route
							path='/:sessao/:id'
							element={<Sessao />}
						/>
						<Route
							path='/produto/:id'
							element={<Produto />}
						/>
						<Route
							path='/carrinho'
							element={<Carrinho />}
						/>
					</Routes>
				</BrowserRouter>
			</SmartPhoneContainer>
		</Screen>
	);
}

export default App;
