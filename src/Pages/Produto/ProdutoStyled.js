import styled from "styled-components";

export const ProdutoPage = styled.div`
    position: relative;
    padding: 20px 3.5%;
    .line {
        height: 2px;
        background-color: gray;
        width: 100%;
        margin: 25px 0;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            color: #0afc5a;
            font-size: 25px;
            width: 100%;
            text-align: left;
            font-weight: 400;
        }

        button{
            margin-top: 20px;
            align-self: center;
            border: none;
            background-color: #0afc5a;
            color: white;
            font-weight: bold;
            height: 40px;
            border-radius: 10px;
        }
    }

    h1 {
        color: ${(props) => (props.disponivel ? "green" : "red")};
        font-weight: bold;
    }

    .descricao{
        margin-top: 25px;
        h1{
            color: white !important;
            margin-bottom: 15px;
            font-weight: bold;
        }
        p{
            word-wrap: break-word;
            color: white;
            font-size: 20px;
        }
    }
`;

export const ImgTitulo = styled.div`
    box-sizing: border-box;
    img {
        width: 100%;
        margin-bottom: 25px;
    }
    h1 {
        color: white !important;
        word-wrap: break-word;
        font-weight: 400;
    }
`;
