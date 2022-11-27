import FootBar from "../../components/FootBar/FootBar";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/Sidebar";
import axios from "axios";
import { URLS } from "../../services/constants";
import { useEffect, useState } from "react";
import {
	Container,
	PrincipalStyled,
	ProdutoeDescricao,
	ProdutoStyled,
} from "./MainPageStyled";
import { useParams } from "react-router-dom";
import { separateIntoCategory } from "../../services/separateIntoCategory";
import Product from "../../components/Product/Product";

export default function MainPage({}) {
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

	return (
		<>
			<NavBar />
			<Container>
				<PrincipalStyled>
					<h1>Recomendados</h1>
					{produto?.map((product, index) => {
						return (
							<Product
								key={index}
								product={product}
							/>
						);
					})}
				</PrincipalStyled>
				<FootBar />
			</Container>
		</>
	);
}
