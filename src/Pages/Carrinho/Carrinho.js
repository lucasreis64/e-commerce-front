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

export default function Carrinho(params) {
    const [produto, setProduto] = useState(null);
    const { token } = useContext(contexto);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate('/sign-in')
        console.log(token)
        getProduto();
    }, []);

    async function getProduto() {
        try {
            const productGet = await axios.get(URLS.CART, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(productGet.data);
            setProduto(productGet.data);
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

                                        </DescriçãoProduto>
                                    </ImagemEDescrição>
                                    <Preço>
                                        <h1>Preço</h1>
                                        <h2>{p.price}</h2>
                                    </Preço>
                                </Produto>
                            );
                        })
                        : "carregando..."}
                </ContainerProdutos>

                <ContainerFinalizarPedido>
                    <FinalizarPedido>
                        <img src={carrinhoIcon} alt="" />
                        <h1>Finalizar Pedido</h1>
                    </FinalizarPedido>
                </ContainerFinalizarPedido>
            </Container>
        </>
    );
}
