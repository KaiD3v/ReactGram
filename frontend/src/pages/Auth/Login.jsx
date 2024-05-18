import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Entre para ver o que há de novo!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
          required
        />
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" disabled value="Aguarde..." />}
        {error && <Message msg={error} type="error" />}
      </form>

      <p>
        Não tem cadastro? <Link to={"/register"}>Clique aqui</Link>
      </p>
    </div>
  );
};

export default Login;
