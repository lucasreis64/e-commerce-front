import NavBar from "../NavBar/NavBar";
import { PrincipalStyled, ProdutoeDescricao, ProdutoStyled } from "./PrincipalStyled";


export default function Principal({}) {
  const produto = [
    {
      titulo: "computador",
      imagem:
        "https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWms9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--75bbc3763ae3d50875cc3bc1045623e3085fa253/pc-gamer-atlas-top.jpg",
      descrição: "a",
    },
  ];

  return (
    <>
      <PrincipalStyled>
        <NavBar />
        <h1>Recomendados</h1>
        {produto.map((a,b) => {
          return (
            <ProdutoStyled>
              <div key={b}>
                <h2>{a.titulo}</h2>
                <ProdutoeDescricao>
                  <img src={a.imagem} />
                  <p>{a.descrição}</p>
                </ProdutoeDescricao>
              </div>
            </ProdutoStyled>
          );
        })}
      </PrincipalStyled>
    </>
  );
}
