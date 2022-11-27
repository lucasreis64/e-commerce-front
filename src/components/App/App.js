import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../services/GlobalStyles";
import SignInPage from "../../Pages/SignInPage/SignInPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";
import MainPage from "../../Pages/MainPage/MainPage";
import { Screen, SmartPhoneContainer } from "./AppStyled";
import Sessao from "../Sessao/Sessao";
<<<<<<< HEAD
<<<<<<< HEAD
import Produto from "../../Pages/Produto/Produto";
import Carrinho from "../Carrinho/Carrinho";
import MinhaConta from "../MnhaConta/MinhaConta";
=======
import Produto from "../Produto/Produto";
import Carrinho from "../../Pages/Carrinho/Carrinho";
import NavBar from "../NavBar/NavBar";
>>>>>>> 80ee756 (fix: navbar global & correçao animação auth)
=======
import Produto from "../Produto/Produto";
import Carrinho from "../../Pages/Carrinho/Carrinho";
import NavBar from "../NavBar/NavBar";
=======
import Produto from "../../Pages/Produto/Produto";
import Carrinho from "../Carrinho/Carrinho";
import MinhaConta from "../MnhaConta/MinhaConta";
>>>>>>> d3f7242 (fix: some imports)
>>>>>>> 6706a01 (fix: some imports)

function App() {
	return (
		<Screen>
			<GlobalStyle />
			<SmartPhoneContainer>
        
				<BrowserRouter>
          <NavBar/>
					<Routes>
						<Route
							path='/sign-in'
							element={<SignInPage />}
						/>
						<Route
							path='/sign-up'
							element={<SignUpPage />}
						/>
						<Route
							path='/'
							element={<MainPage />}
						/>
						<Route
							path='/:category'
							element={<MainPage />}
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
