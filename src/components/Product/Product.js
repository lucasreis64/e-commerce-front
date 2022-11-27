import React from "react";
import {
	AddToCart,
	Description,
	ImageContainer,
	InnerContainer,
	Price,
	ProductCard,
	TextContainer,
	Title,
} from "./ProductStyled";
import { numFormat } from "../../services/formatNumber";
import { useNavigate } from "react-router-dom";

function Product(props) {
	const { _id, title, description, price, img } = props.product;
	const navigate = useNavigate();
	const formatedPrice = numFormat.format(price);

	function handleClick(e) {
		navigate(`/produto/${_id}`);
	}

	return (
		<ProductCard>
			<InnerContainer>
				<ImageContainer img={img} />
				<TextContainer>
					<Title>{title}</Title>
					<Price>{formatedPrice}</Price>
				</TextContainer>
			</InnerContainer>
			<AddToCart onClick={handleClick}>
				<ion-icon name='cart-outline'></ion-icon>
				<p>COMPRAR</p>
			</AddToCart>
		</ProductCard>
	);
}

export default Product;
