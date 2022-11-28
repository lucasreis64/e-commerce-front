import { useContext, useEffect, useState } from "react";
import { URLS } from "../../services/constants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { carregamento } from "../../services/animations";
import Swal from "sweetalert2";
import { contexto } from "../../context/context";
import { LoginContainer } from "./SignInStyled";
import logoBlack from "../../img/logoBlack.png";

let tempoMs;

export default function SignInPage(params) {
  const navigate = useNavigate();
  const context = useContext(contexto);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContext(contexto);
  const { permanecerConectado, setPermanecerConectado } = useContext(contexto);
  tempoMs = 400;

  //   useEffect(() => {
  //     const userInfoCopy = JSON.parse(localStorage.getItem("userInfo"));

  //     if (userInfoCopy !== null) {
  //       setUserInfo(userInfoCopy);
  //       navigate("/");
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const login = await axios.post(URLS.LOGIN, {
        email: email,
        password: password,
      });

      const userInfoSerializada = JSON.stringify(login.data);
      localStorage.setItem("userInfo", userInfoSerializada);
      setUserInfo(login.data);
      context.setToken(login.data.token);
      navigate("/");
    } catch (e) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário ou senha incorretos!",
        footer: "Tente novamente!",
      });
      console.log(e);
    }
  }

  return (
    <LoginContainer loading={loading}>
      <img src={logoBlack} alt="" />
      <form action="/hoje" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {loading ? carregamento : <button type="submit">Cadastrar</button>}
        <label>
          Permanecer conectado?
          <input
            className="check"
            type="checkbox"
            checked={permanecerConectado}
            onChange={() => setPermanecerConectado(!permanecerConectado)}
          />
        </label>
      </form>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}

export function tempo() {
  tempoMs += 50;
  return tempoMs + "ms";
}
