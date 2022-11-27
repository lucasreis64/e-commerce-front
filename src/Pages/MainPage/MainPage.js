import FootBar from "../../components/FootBar/FootBar";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import axios from "axios";
import { URLS } from "../../services/constants";
import { useEffect, useState } from "react";
import cartIcon from "../../img/cartIcon.png";
import {
	AdicionarAoCarrinho,
	Container,
	PrincipalStyled,
	ProdutoeDescricao,
	ProdutoStyled,
} from "./MainPageStyled";
import { useParams } from "react-router-dom";
import { separateIntoCategory } from "../../services/separateIntoCategory";
import carrinhoIcon from "../../img/carrinho.png";


export default function Principal({}) {
	const [produto, setProduto] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getProduto();
	}, []);

	async function getProduto() {
		try {
			const productGet = await axios.get(URLS.PRODUCTS);
			const products = separateIntoCategory(productGet.data);
			setProduto(products);
		} catch (error) {
			console.log(error);
		}
	}

	async function AdicionaNoCarrinho(title, img, price, id, amount) {
    try {
      const response = await axios.post("/entradas", {
        title: title,
		img: img,
		price: price,
		_id: id,
		amount: amount,
      });

      if (response.status == 201) alert("Valor inserido com sucesso!");
      window.location.href = "/mainpage";
    } catch (e) {
      console.log(e);
      alert(e);
      return false;
    }
  }

	return (
		<>
			<Container>
				<PrincipalStyled>
					<h1>Recomendados</h1>
					{produto?.map((a, b) => {
						return (
							<ProdutoStyled>
								<div key={b}>
									<h2>{a.title}</h2>
									<ProdutoeDescricao>
										<img
											alt=''
											src={a.img}
										/>
										<p>{a.description}</p>
										<h3>R$ {a.price}</h3>
										<p>Em estoque: {a.inStock}</p>
										<AdicionarAoCarrinho><img src = {cartIcon} /><h1>Adicionar ao carrinho</h1></AdicionarAoCarrinho>
									</ProdutoeDescricao>
								</div>
							</ProdutoStyled>
						);
					})}
				</PrincipalStyled>
				<FootBar />
			</Container>
		</>
	);
}
