import styled from "styled-components";

export const MinhaContaStyled = styled.div`
  position: absolute;
  right: 0;
  top:0;
  width: 150px;
  height: 120px;
  background-color: #1d1b1b;
  border-radius: 5px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Categorias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  p {
    color: white;
    margin: 5px;
  }
`;

export const IconeExcluir = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-top: 10%;
    margin-left: 0%;
  }
`;