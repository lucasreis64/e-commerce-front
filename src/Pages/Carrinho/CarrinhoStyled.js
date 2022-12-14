import styled from "styled-components";

export const Container = styled.div`
    background-color: #514c4c;
    width: 100%;
    max-height: 100%;
`;

export const Titulo = styled.div`
    background-color: #514c4c;

    h1 {
        color: white;
        margin: 5%;
    }
`;
export const ContainerProdutos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Produto = styled.div`
    width: 90%;
    height: 180px;
    background-color: darkgray;
    margin-top: 10%;

    h1 {
    }
`;

export const DenominaçãoProduto = styled.div`
    width: 94.5%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    background-color: gray;
    padding: 10px;

    h1 {
        margin-left: 3%;
    }
    h2 {
        margin-right: 25%;
    }
`;

export const ImagemProduto = styled.div`
    width: 30%;
    height: 65%;
    background-color: gainsboro;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Preço = styled.div`
    width: 100%;
    height: 20%;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-left: 7%;
    }
    h2 {
        margin-right: 5%;
    }
`;
export const ContainerFinalizarPedido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 20px;
`;
export const FinalizarPedido = styled.div`
    width: 90%;
    height: 60px;
    background-color: darkgreen;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 10px;
        color: white;
    }
`;

export const DescriçãoProduto = styled.div`
    width: 70%;
    height: 100%;
    margin: 4px;
    flex-wrap: wrap;
    display: flex;
`;

export const ImagemEDescrição = styled.div`
    display: flex;
`;

export const QuantidadeProduto = styled.div`
    display: flex;
    margin-top: 5px;
    gap: 5px;
    button {
        height: 25px;
        width: 25px;
        color: white;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        background-color: white !important;
        color: black;
        min-width: 25px !important;
        height: 25px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
