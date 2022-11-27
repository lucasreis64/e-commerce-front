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
										<h3>{a.price}</h3>
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
