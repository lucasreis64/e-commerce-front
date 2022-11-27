import React from "react";
import {
	Description,
	ImageContainer,
	InnerContainer,
	Price,
	ProductCard,
	TextContainer,
	Title,
} from "./ProductStyled";
import { numFormat } from "../../services/formatNumber";

function Product(props) {
	const { id, title, description, price, img } = props.product;
	const formatedPrice = numFormat.format(price);
	return (
		<ProductCard>
			<InnerContainer>
				<ImageContainer img={img} />
				<TextContainer>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</TextContainer>
			</InnerContainer>
			<Price>{formatedPrice}</Price>
		</ProductCard>
	);
}

export default Product;
