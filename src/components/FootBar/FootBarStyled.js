import styled from "styled-components";

export const FootBarStyled = styled.div`
  margin-top: 30px;
  width: 100%;
  height: fit-content;
  background-color: #303030;
  position: absolute;
  left: 0px;
`;

export const Categorias = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    margin-top: 5%;
    color: #6256ea;
  }
`;

export const OutrasInformacoes = styled.div`
  margin: 7%;
`;

export const RedesSociais = styled.div`
  p {
    margin: 5%;
    color: #6256ea;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 5%;
    margin-left: 10%;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    width: 40px;
    height: 40px;
  }
`;
