import FootBar from "../FootBar/FootBar";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import {
  Container,
  PrincipalStyled,
  ProdutoeDescricao,
  ProdutoStyled,
} from "./PrincipalStyled";

export default function Principal({}) {
  const produto = [
    {
      titulo: "COMPUTADOR GAMER",
      imagem:
        "https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWms9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--75bbc3763ae3d50875cc3bc1045623e3085fa253/pc-gamer-atlas-top.jpg",
      descrição: "COMPUTADOR GAMER  I9- 9900K RTX 3090TI 16GB RAM",
      preço: "R$ 7,999",
    },
    {
      titulo: "I-PHONE 13 PRO",
      imagem:
        "https://conteudo.imguol.com.br/c/noticias/d2/2021/11/17/iphone-13-1637175911288_v2_4x3.jpg",
      descrição: "iPHONE 13 DUAL CAMERA ",
      preço: "R$ 7,999",
    },
  ];

  return (
    <>
      <Container>
        <PrincipalStyled>
          <NavBar />  
          <h1>Recomendados</h1>
          {produto.map((a, b) => {
            return (
              <ProdutoStyled>
                <div key={b}>
                  <h2>{a.titulo}</h2>
                  <ProdutoeDescricao>
                    <img alt = "" src={a.imagem} />
                    <p>{a.descrição}</p>
                    <h3>{a.preço}</h3>
                  </ProdutoeDescricao>
                </div>
              </ProdutoStyled>
            );
          })}
        </PrincipalStyled>
        <FootBar />
      </Container>
    </>
  );
}
