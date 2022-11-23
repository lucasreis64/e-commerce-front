import styled from "styled-components";

export const PrincipalStyled = styled.div`
  background-color: #514c4c;

  h1 {
    margin: 5%;
    font-size: 25px;
    color: white;
  }
`;

export const ProdutoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 10%;
    font-size: 20px;
  }
  img {
    width: 80%;
    height: 200px;
  }
`;

export const ProdutoeDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;