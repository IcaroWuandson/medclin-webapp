import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import {
  DivButtonActions,
  ButtonAction,
  Labels,
  Container,
  WelcomeText,
  ContentWrapper,
} from "./styles";

const Financeiro = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <ContentWrapper>
          <WelcomeText>Financeiro</WelcomeText>

          <Labels>Entradas</Labels>
          <DivButtonActions>
            <ButtonAction onClick={() => navigate("/plataforma/quitar-valores")}>
              Registrar atendimento
            </ButtonAction>
            <ButtonAction>Registrar recebimento de convênio</ButtonAction>
            <ButtonAction>Registrar venda de produto</ButtonAction>
            <ButtonAction>Recebimento de convênio</ButtonAction>
          </DivButtonActions>

          <Labels>Saídas</Labels>
          <DivButtonActions>
            <ButtonAction>Registrar saída</ButtonAction>
            <ButtonAction>Registrar custo fixo</ButtonAction>
            <ButtonAction>Registrar custo variável</ButtonAction>
            <ButtonAction>Registrar manutenção</ButtonAction>
            <ButtonAction>Registrar marketing</ButtonAction>
            <ButtonAction>Registrar outros custos</ButtonAction>
          </DivButtonActions>

          <Labels>Gestão de Contas</Labels>
          <DivButtonActions>
            <ButtonAction>Gerenciar contas a pagar</ButtonAction>
            <ButtonAction>Gerenciar contas a receber</ButtonAction>
            <ButtonAction>Gestão de caixa</ButtonAction>
          </DivButtonActions>

          <Labels>Investimentos e Financiamentos</Labels>
          <DivButtonActions>
            <ButtonAction>Registrar investimento</ButtonAction>
            <ButtonAction>Registrar financiamento</ButtonAction>
          </DivButtonActions>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Financeiro;
