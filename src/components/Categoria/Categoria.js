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
} from "./CategoriaStyled";
import { separateIntoCategory } from "../../services/separateIntoCategory";
import { contexto } from "../../context/context";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function Principal({}) {
  const [produtos, setProdutos] = useState([]);
  const { token } = useContext(contexto);
  const navigate = useNavigate();
  const { categoria } = useParams();

  useEffect(() => {
    getProduto();
  }, []);

  async function getProduto() {
    try {
      const productGet = await axios.get(
        `${URLS.PRODUCTS}?category=${categoria}`
        
      );
      console.log(categoria);

      const product = productGet.data.products;
      console.log(product);
      setProdutos(product);
    } catch (error) {
      console.log(error);
    }
  }

  async function adicionaNoCarrinho(id, img, price, title, amount) {
    try {
      console.log(produtos);
      const response = await axios.post(
        URLS.CART,
        { _id: id, img: img, price, title, amount },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.log(response);
      Swal.fire({
        title: "Sucesso!",
        text: "Deseja visitar o carrinho?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, quero visitar!",
      }).then((result) => {
        if (result.isConfirmed) navigate("/carrinho");
        else return;
      });
    } catch (e) {
      console.log(e);
      // alert(e);
      console.log(e);
    }
  }

  function paginaProduto(id) {
    navigate(`/produto/${id}`);
  }

  return (
    <>
      <Container>
        <PrincipalStyled>
          <h1>{categoria.toUpperCase()}</h1>

          {produtos
            ? produtos.map((produto) => {
                return (
                  <ProdutoStyled>
                    <div key={produto._id}>
                      <h2>{produto.title}</h2>
                      <ProdutoeDescricao
                        onClick={() => paginaProduto(produto._id)}
                      >
                        <img alt="" src={produto.img} />
                        <p>{produto.description}</p>
                        <h3>R$ {produto.price}</h3>
                        <p>Em estoque: {produto.inStock}</p>
                        <AdicionarAoCarrinho
                          onClick={() =>
                            adicionaNoCarrinho(
                              produto._id,
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
              })
            : "Carregando..."}
        </PrincipalStyled>
        <FootBar />
      </Container>
    </>
  );
}
