import { useContext, useEffect, useState } from "react";
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
import { contexto } from "../../context/context";
import { useNavigate } from "react-router-dom";
import QuantidadeProd from "./QuantidadeProduto";

export default function Carrinho(params) {
    const [produto, setProduto] = useState(null);
    const [quantity, setQuantity] = useState(false);
    const [total, setTotal] = useState(null);
    const { token } = useContext(contexto);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/sign-in");
        console.log(token);
        getProduto();
    }, []);
    console.log(quantity);

    useEffect(() => {
        getProduto();
    }, [quantity]);

    async function getProduto() {
        try {
            const productGet = await axios.get(URLS.CART, {
                headers: {
                    Authorization: `Bearer ${token.token}`,
                },
            });
            console.log(productGet.data);
            setProduto(productGet.data);
            calcularTotal(productGet.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function calcularTotal(product) {
        let total = 0;
        product.map((p, idx) => {
            return (total +=
                Number(p.price.replace(",", ".")) * Number(p.amount));
        });
        console.log(total);
        setTotal(`R$${total.toFixed(2).replace(".", ",")}`);
    }

    return (
        <>
            <Container>
                <Titulo>
                    <h1>Meu carrinho</h1>
                </Titulo>

                <ContainerProdutos>
                    {produto
                        ? produto.map((p, idx) => {
                              return (
                                  <Produto>
                                      <DenominaçãoProduto>
                                          <h1>Produto:</h1>
                                      </DenominaçãoProduto>
                                      <ImagemEDescrição>
                                          <ImagemProduto>
                                              {" "}
                                              <img src={p.img} alt="" />
                                          </ImagemProduto>
                                          <DescriçãoProduto>
                                              <h2>{p.title}</h2>
                                              <QuantidadeProd
                                                  p={p}
                                                  setQuantity={setQuantity}
                                                  quantity={quantity}
                                              />
                                          </DescriçãoProduto>
                                      </ImagemEDescrição>
                                      {quantity ? (
                                          <Preço>
                                              <h1>Preço</h1>
                                              <h2>{`R$${(
                                                  Number(
                                                      p.price.replace(",", ".")
                                                  ) * Number(p.amount)
                                              )
                                                  .toFixed(2)
                                                  .replace(".", ",")}`}</h2>
                                          </Preço>
                                      ) : (
                                          <Preço>
                                              <h1>Preço</h1>
                                              <h2>{`R$${(
                                                  Number(
                                                      p.price.replace(",", ".")
                                                  ) * Number(p.amount)
                                              )
                                                  .toFixed(2)
                                                  .replace(".", ",")}`}</h2>
                                          </Preço>
                                      )}
                                  </Produto>
                              );
                          })
                        : "carregando..."}
                </ContainerProdutos>

                <ContainerFinalizarPedido>
                    <FinalizarPedido>
                        <h1>Total: {total}</h1>
                    </FinalizarPedido>
                    <FinalizarPedido
                        onClick={() => {
                            navigate("/finalizar");
                        }}
                    >
                        <img src={carrinhoIcon} alt="" />

                        <h1>Finalizar Pedido</h1>
                    </FinalizarPedido>
                </ContainerFinalizarPedido>
            </Container>
        </>
    );
}
