import FootBar from "../FootBar/FootBar";
import NavBar from "../NavBar/NavBar";
import { Container, Titulo } from "./CarrinhoStyled";

export default function Carrinho(params) {
    return (
      <>
        <NavBar />
        <Container>
          <Titulo>
            <h1>Meu carrinho</h1>
          </Titulo>
          
        </Container>
      </>
    );
};
