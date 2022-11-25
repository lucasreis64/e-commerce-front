import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProdutoPage } from "./ProdutoStyled";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProduto();
    }, []);

    async function getProduto() {
        try {
            const productGet = await axios.get(
                `https://e-commerce-projetao-back.onrender.com/products?id=${id}`
                
            );console.log(productGet.data)
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
                <ProdutoPage>
                    <img src={produto.img} alt="" />
                    <h1>{produto.title}</h1>
                    <br />
                    <h1>
                        {produto.inStock > 0
                            ? "Produto Disponível"
                            : "Produto Indisponível"}
                    </h1>
                    <br />
                    <h1>{produto.price}</h1>
                    <button>Colocar no carrinho!</button>
                    <p>{produto.description}</p>
                </ProdutoPage>
            )}
        </>
    );
}
