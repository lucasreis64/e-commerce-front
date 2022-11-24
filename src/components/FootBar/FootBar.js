import { Categorias, FootBarStyled, Icons, OutrasInformacoes, RedesSociais } from "./FootBarStyled";
import instagramIcom from "../../img/instagram.png"
import whatsappIcom from "../../img/whatsapp.png";
import twiteerIcom from "../../img/twitter.png";

export default function FootBar() {
  return (
    <>
      <FootBarStyled>
        <Categorias>
          <p>Institucional</p>
          <p>Dúvidas</p>
          <p>Ajuda</p>
        </Categorias>
        <OutrasInformacoes>
          <p>email: driven@driven.com</p>
          <p>telefone: (99)9 9999-9999</p>
          <p>endereço: Rua xxxxxxx, xxx</p>
        </OutrasInformacoes>
        <RedesSociais>
          <p>Segue a gente nas redes sociais!</p>
          <Icons>
            <img src={instagramIcom} />
            <img src={whatsappIcom} />
            <img src={twiteerIcom} />
          </Icons>
        </RedesSociais>
      </FootBarStyled>
    </>
  );
}
