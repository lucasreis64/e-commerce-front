import axios from "axios";
import { useState } from "react";
import { ProdutoPage } from "./ProdutoStyled";

export default function Produto(params) {
    const [produto, setProduto] = useState(null)


    
    async function getProduto() {
        try {
            const productGet = await axios.get(`https://e-commerce-projetao-back.onrender.com/products?category=${'category'}&id=${'id'}`)
            setProduto(productGet)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ProdutoPage>
            <img src={produto.img} alt="" />
            <h1>{produto.title}</h1>
            <br/>
            <h1>{produto.inStock>0?'Produto Disponível':'Produto Indisponível'}</h1>
            <br/>
            <h1>{produto.price}</h1>
            <button>Colocar no carrinho!</button>
            <p>{produto.description}</p>
        </ProdutoPage>
    )
    
}
