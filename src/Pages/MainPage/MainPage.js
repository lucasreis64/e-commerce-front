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
import { fidgedLoad } from "../../services/animations";

export default function MainPage() {
	const [produto, setProduto] = useState(null);
	const { category } = useParams();
	useEffect(() => {
		getProduto();
	}, [category]);

	async function getProduto() {
		try {
			if (category) {
				const productGet = await axios.get(
					`${URLS.PRODUCTS}?category=${category}`
				);
				const products = productGet.data.products;
				setProduto(products);
			} else {
				const productGet = await axios.get(URLS.PRODUCTS);
				const products = separateIntoCategory(productGet.data);
				setProduto(products);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<NavBar />
			<Container>
				<PrincipalStyled>
					{category ? <h1>{category.toUpperCase()}</h1> : <h1>RECOMENDADOS</h1>}
					{!produto
						? fidgedLoad
						: produto?.map((product, index) => {
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
