import { useEffect, useState } from "react";
import FootBar from "../../components/FootBar/FootBar";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import carrinhoIcon from "../../img/carrinho.png";
import { URLS } from "../../services/constants";
import {
  Container,
  ContainerFinalizarPedido,
  ContainerProdutos,
  DenominaçãoProduto,
  DescriçãoProduto,
  FinalizarPedido,
  ImagemEDescrição,
  ImagemProduto,
  Preço,
  Produto,
  Titulo,
} from "./CarrinhoStyled";

 export default function Carrinho(params) {
//   const [produto, setProduto] = useState(null);

//    useEffect(() => {
//      (async () => {
//        const userInfoCopy = JSON.parse(localStorage.getItem("userInfo"));
//        console.log(userInfoCopy);
//        await getProduto;
//      })();
//    }, []);

   

//    async function getProduto() {
//      try {
//        const productGet = await axios.get(URLS.CART, {
//          headers: {
//            Authorization: `Bearer ${URLS.CART}`,
//          },
//        });
//        console.log(productGet.data[0].products);
//        setProduto(productGet.data[0].products);
//      } catch (error) {
//        console.log(error);
//      }
//    }
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
              <h2>Notebook Gamer</h2>
            </DenominaçãoProduto>
            <ImagemEDescrição>
              <ImagemProduto>
                {" "}
                <img src="https://curson.com.br/wp-content/uploads/2019/08/Computador-para-homestudio-Laptop-ideal-porem-sem-SSD.jpg" />
              </ImagemProduto>
              <DescriçãoProduto>
                <h1> lalalallalalalalalal
                  alallalalalalalalalalal
                  allalalalalalalalalalallalala</h1>
                </DescriçãoProduto>
            </ImagemEDescrição>
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
