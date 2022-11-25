import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FootBar from "../FootBar/FootBar";
import { ImgTitulo, ProdutoPage } from "./ProdutoStyled";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProduto();
    }, []);

    function formatarNum(num) {
        num = Number(num);
        return num.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    }

    async function getProduto() {
        try {
            const productGet = await axios.get(
                `https://e-commerce-projetao-back.onrender.com/products?id=${id}`
            );
            console.log(productGet.data);
            setProduto(productGet.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {!produto ? (
                "Carregando..."
            ) : (
                <ProdutoPage disponivel={produto.inStock>0?true:false}>
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
                        <button>COLOCAR NO CARRINHO</button>
                    </div>
                    <div className="line" />
                    <div className="descricao">
                        <h1>DESCRIÇÃO:</h1>
                        <p>{produto.description}</p>
                    </div>
                </ProdutoPage>
            )}
            <FootBar/>
        </>
    );
}
