import styled from "styled-components";

export const SideBarStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
  background-color: #1d1b1b;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

export const Categorias = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 60%;
  z-index: 2;

  h1 {
    font-size: 15px;
    margin-top: 10px;
    color: white;
    margin: 15px;
  }
`;

export const IconeExcluir = styled.div`
  img {
    width: 30px;
    height: 30px;
    margin-top: 60%;
    margin-left: 0%;
  }
`;
