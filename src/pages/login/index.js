import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";
import {
  TextAviso,
  LoginForm,
  CardsContainer,
  Card1,
  Card2,
  InputField,
  SubmitButton,
  ContentCard1,
  Label,
  FraseTres,
  RightImage,
} from "./styles";
import logo from "../../assets/logo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      navigate("/plataforma/");
    }
    setLoading(false);
  };

  return (
    <CardsContainer>
      <Card1>
        <ContentCard1>
          <RightImage src={logo} alt="logo" />
        </ContentCard1>
      </Card1>

      <Card2>
        <FraseTres>Acesse sua conta</FraseTres>
        <LoginForm onSubmit={handleLogin}>
          <Label>Email</Label>
          <InputField
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <InputField
            type="password"
            placeholder=" Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Entrar</SubmitButton>
        </LoginForm>
        <TextAviso>
          Um produto desenvolvido pela Simply Tecnologia LTDA todos os direitos
          reservados. Está de acordo com as regras da Lei nº 13.709 (Lei Geral
          de Proteção de Dados - LGPD), que estabelece um conjunto de regras
          para coleta, tratamento, armazenamento e compartilhamento de dados
          pessoais
        </TextAviso>
      </Card2>
    </CardsContainer>
  );
}

export default Login;
