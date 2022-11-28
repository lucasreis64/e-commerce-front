import styled from "styled-components";

export const Container = styled.div`
  background-color: #514c4c;
`;

export const PrincipalStyled = styled.div`
  background-color: #514c4c;
  margin-bottom: 10%;

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
  text-align: center;
  h2 {
    margin: 10%;
    font-size: 20px;
  }
  img {
    width: 80%;
    height: 200px;
    background-color: blue;
  }
  h2 {
    color: black;
    background-color: white;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 5px 5px 5px darkblue;
  }
`;

export const ProdutoeDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;


  h2{
    color: blue;
  }
  p{
    margin-top: 20px;
  }

  h3{
    margin-top: 10px;
    color: lightgreen;
  }
`;

export const AdicionarAoCarrinho = styled.div`
  width: 90%;
  height: 60px;
  background-color: darkgreen;
  margin-top: 10%;
  border-radius: 5px;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px;
    color: white;
    font-size: 20px;
  }

  img{
    width: 30px;
    height: 30px;
    background-color: darkgreen;
  }
`;