import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #231f20;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 140px;

    &:hover {
      background-color: #ded9d3;
      color: #231f20;
    }
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/drafts");
    }
  }, [navigate]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await login({ username, password });

    if (data && data.type === "admin") {
      navigate("/dashboard/drafts");
    } else {
      alert("Invalid credentials or not an admin user");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <StyledInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </StyledForm>
  );
};

export default Login;
