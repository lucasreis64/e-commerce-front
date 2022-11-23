import { useContext, useEffect, useState } from "react";
import { urlLogin } from "../../services/constants";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { carregamento } from "../../services/constants";
import Swal from "sweetalert2";
import { contexto } from "../../context/context";
import { LoginContainer } from "./SignInStyled";
import logoBlack from "../../img/logoBlack.png"

let tempoMs;

export default function SignIn(params) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setUserInfo } = useContext(contexto);
    const { permanecerConectado, setPermanecerConectado } =
        useContext(contexto);
    tempoMs = 400;

    useEffect(() => {
        const userInfoCopy = JSON.parse(localStorage.getItem("userInfo"));

        if (userInfoCopy !== null) {
            setUserInfo(userInfoCopy);
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const login = axios.post(urlLogin, {
            email: email,
            password: password,
        });
        login.then((response) => {
            console.log(permanecerConectado);
            if (permanecerConectado) {
                const userInfoSerializada = JSON.stringify(response.data);
                localStorage.setItem("userInfo", userInfoSerializada);
            }
            setUserInfo(response.data);
            navigate("/");
        });
        login.catch((response) => {
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuário ou senha incorretos!",
                footer: "Tente novamente!",
            });
        });
    }

    return (
        <LoginContainer loading={loading}>
            <img src={logoBlack} alt=""/>
            {!loading ? (
                <>
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
                        <button>Entrar</button>
                        <label>
                            Permanecer conectado?
                            <input
                                className="check"
                                type="checkbox"
                                checked={permanecerConectado}
                                onChange={() =>
                                    setPermanecerConectado(!permanecerConectado)
                                }
                            />
                        </label>
                    </form>
                    <Link to="/sign-up">
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>
                </>
            ) : (
                <>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled
                        />
                        <button disabled>{carregamento}</button>
                        <label>
                            Permanecer conectado?
                            <input
                                disabled
                                className="check"
                                type="checkbox"
                                value={permanecerConectado}
                            />
                        </label>
                    </form>
                    <Link to="/sign-up">
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>
                </>
            )}
        </LoginContainer>
    );
}

export function tempo() {
    tempoMs += 50;
    return tempoMs + "ms";
}

