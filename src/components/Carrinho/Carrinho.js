import { useEffect, useState } from "react";
import FootBar from "../FootBar/FootBar";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import carrinhoIcon from "../../img/carrinho.png";
import {
  Container,
  ContainerFinalizarPedido,
  ContainerProdutos,
  DenominaçãoProduto,
  FinalizarPedido,
  ImagemProduto,
  Preço,
  Produto,
  Titulo,
} from "./CarrinhoStyled";

export default function Carrinho(params) {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    getProduto();
  }, []);

  async function getProduto() {
    try {
      const productGet = await axios.get(
        `https://e-commerce-projetao-back.onrender.com/products`
      );
      console.log(productGet.data[0].products);
      setProduto(productGet.data[0].products);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Container>
        <Titulo>
          <h1>Meu carrinho</h1>
        </Titulo>

        <ContainerProdutos>
          {/* {produto?.map((a, b) => { */}
          <Produto>
            <DenominaçãoProduto>
              <h1>Produto</h1>
              <h2> Desc.</h2>
            </DenominaçãoProduto>
            <ImagemProduto></ImagemProduto>
            <Preço>
              <h1>Preço</h1>
              <h2>R$ 2000</h2>
            </Preço>
          </Produto>
          {/* })} */}
        </ContainerProdutos>

        <ContainerFinalizarPedido>
          <FinalizarPedido>
            <img src={carrinhoIcon} />
            <h1>Finalizar Pedido</h1>
          </FinalizarPedido>
        </ContainerFinalizarPedido>
      </Container>
    </>
  );
}
