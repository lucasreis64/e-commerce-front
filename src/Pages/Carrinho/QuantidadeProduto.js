import { useContext, useState } from "react";
import axios from "axios";

import { URLS } from "../../services/constants";
import {

    QuantidadeProduto,

} from "./CarrinhoStyled";
import { contexto } from "../../context/context";

export default function QuantidadeProd({p, setQuantity,quantity}) {
    const [quantidade, setQuantidade] = useState(p.amount)
    const { token } = useContext(contexto);

    async function mudarQuantidade(num, id) {
        let quant = Number(quantidade)+num
        if (quant>=0) setQuantidade(quant);
        
        try {
            const att = await axios.put(
                `${URLS.CART}/${id}`,
                { amount: quant },
                {
                    headers: {
                        Authorization: `Bearer ${token.token}`,
                    },
                }
            );
            console.log(att)
            setQuantity(!quantity)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <QuantidadeProduto>
            <button onClick={() => mudarQuantidade(-1, p._id, p.amount)}>
                -
            </button>
            <div>
                {quantidade}
            </div>
            <button onClick={() => mudarQuantidade(+1, p._id, p.amount)}>
                +
            </button>
        </QuantidadeProduto>
    );
}
