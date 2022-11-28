import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FootBar from "../FootBar/FootBar";
import { ImgTitulo, ProdutoPage } from "./ProdutoStyled";
import { URLS } from "../../services/constants";
import { contexto } from "../../context/context";
import Swal from "sweetalert2";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const { id } = useParams();
    const { token } = useContext(contexto);
    const navigate = useNavigate();

    useEffect(() => {
        getProduto();
    }, []);

    function formatarNum(num) {
        num = Number(num);
        return num.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    }

    async function getProduto() {
        try {
            const productGet = await axios.get(`${URLS.PRODUCTS}?id=${id}`);
            const product = productGet.data;
            setProduto(product);
        } catch (error) {
            console.log(error);
        }
    }

    async function adicionaNoCarrinho(id, img, price, title, amount) {
        try {
            console.log(produto);
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

    return (
        <>
            {!produto ? (
                "Carregando..."
            ) : (
                <ProdutoPage disponivel={produto.inStock > 0 ? true : false}>
                    <ImgTitulo>
                        <img src={produto.img} alt="" />
                        <h1>{produto.title}</h1>
                    </ImgTitulo>

                    <div className="line" />
                    <h1 className="stock">
                        {produto.inStock > 0
                            ? "PRODUTO DISPONÍVEL"
                            : "PRODUTO INDISPONÍVEL"}
                    </h1>
                    <div className="line" />
                    <div>
                        <h1>{`R$${formatarNum(produto.price)}`}</h1>
                        <button
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
                            COLOCAR NO CARRINHO
                        </button>
                    </div>
                    <div className="line" />
                    <div className="descricao">
                        <h1>DESCRIÇÃO:</h1>
                        <p>{produto.description}</p>
                    </div>
                </ProdutoPage>
            )}
            <FootBar />
        </>
    );
}
