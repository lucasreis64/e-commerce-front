import FootBar from "../../components/FootBar/FootBar";
import axios from "axios";
import { URLS } from "../../services/constants";
import { useContext, useEffect, useState } from "react";
import cartIcon from "../../img/cartIcon.png";
import {
  AdicionarAoCarrinho,
  Container,
  PrincipalStyled,
  ProdutoeDescricao,
  ProdutoStyled,
} from "./MainPageStyled";
import { separateIntoCategory } from "../../services/separateIntoCategory";
import { contexto } from "../../context/context";

export default function Principal({}) {
  const [produtos, setProdutos] = useState([]);
  const context = useContext(contexto);

  useEffect(() => {
    getProduto();
  }, []);

  async function getProduto() {
    try {
      const productGet = await axios.get(URLS.PRODUCTS);
      const products = separateIntoCategory(productGet.data);
      setProdutos(products);
    } catch (error) {
      console.log(error);
    }
  }

  async function adicionaNoCarrinho(id, img, price, title, amount) {
    try {
      console.log(context.token);
      const response = await axios.post(
        URLS.CART,
        { _id: id, img: img, price, title, amount },
        {
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        }
      );
      // console.log(response);
      if (response.status == 201) alert("Valor inserido com sucesso!");
      window.location.href = "/mainpage";
    } catch (e) {
      console.log(e);
      // alert(e);
      console.log(e);
    }
  }

  return (
    <>
      <Container>
        <PrincipalStyled>
          <h1>Recomendados</h1>
          {produtos?.map((produto) => {
            return (
              <ProdutoStyled>
                <div key={produto.id}>
                  <h2>{produto.title}</h2>
                  <ProdutoeDescricao>
                    <img alt="" src={produto.img} />
                    <p>{produto.description}</p>
                    <h3>R$ {produto.price}</h3>
                    <p>Em estoque: {produto.inStock}</p>
                    <AdicionarAoCarrinho
                      onClick={() =>
                        adicionaNoCarrinho(
                          produto.id,
                          produto.img,
                          produto.price,
                          produto.title,
                          1
                        )
                      }
                    >
                      <img src={cartIcon} />
                      <h1>Adicionar ao carrinho</h1>
                    </AdicionarAoCarrinho>
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
