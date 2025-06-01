import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", { email, password });

      if (response.status === 200) {
        sessionStorage.setItem("usuario", JSON.stringify(response.data.usuario)); // Guarda el usuario en sesión
        navigate("/dashboard"); // Redirige al usuario
      }
    } catch (error) {
      alert("❌ Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔑 Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
