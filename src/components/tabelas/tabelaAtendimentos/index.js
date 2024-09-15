import React, { useState, useEffect } from "react";
import {
  List,
  WhatsappLogo,
  ArrowUUpLeft,
  FilePlus,
  Folder,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import {
  TabelaContainer,
  Cabecalho,
  CabecalhoCelula,
  Celula,
  Linha,
  ButtonAtender,
  OpcaoMenu,
  MenuOpcoes,
  MenuSuspenso,
  TextMenu,
} from "./styles";

function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  const nascimento = new Date(dataNascimento);

  if (isNaN(nascimento)) {
    return null;
  }

  let anos = dataAtual.getFullYear() - nascimento.getFullYear();
  let meses = dataAtual.getMonth() - nascimento.getMonth();

  if (
    meses < 0 ||
    (meses === 0 && dataAtual.getDate() < nascimento.getDate())
  ) {
    anos--;
    meses += 12;
  }

  if (dataAtual.getDate() < nascimento.getDate()) {
    meses--;
  }

  if (meses < 0) {
    meses += 12;
  }

  return `${anos} anos ${meses} meses`;
}

function calcularTempoEspera(chegada) {
  if (chegada == null) {
    return "---";
  }

  const horaAtual = new Date();

  const dataChegada = new Date();
  const [horas, minutos, segundos] = chegada.split(":").map(Number);
  dataChegada.setHours(horas, minutos, segundos, 0);

  const diferencaTempo = horaAtual - dataChegada;

  const totalSegundos = Math.floor(diferencaTempo / 1000);
  const totalMinutos = Math.floor(totalSegundos / 60);
  const segundosRestantes = totalSegundos % 60;

  return `${totalMinutos} minutos, ${segundosRestantes} segundos`;
}

const TabelaAtendimentos = ({ dados }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);
  const [temposEspera, setTemposEspera] = useState(dados.map(() => ""));
  const navigate = useNavigate();

  useEffect(() => {
    const atualizarTemposEspera = () => {
      const novosTemposEspera = dados.map((item) =>
        calcularTempoEspera(item.chegada)
      );
      setTemposEspera(novosTemposEspera);
    };

    const intervalId = setInterval(atualizarTemposEspera, 1000);

    return () => clearInterval(intervalId);
  }, [dados]);

  const toggleMenu = (index) => {
    setMenuAberto(!menuAberto);
    setLinhaSelecionada(index);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setLinhaSelecionada(null);
  };

  dados.sort((a, b) => {
    const horaChegadaA = a.chegada ? a.chegada : "";
    const horaChegadaB = b.chegada ? b.chegada : "";
    return horaChegadaA.localeCompare(horaChegadaB);
  });

  const handleNavigateToProntuario = (agendamento, todosOsDados) => {
    navigate(`/plataforma/prontuario/${agendamento.paciente_id}`, {
      state: { agendamento, todosOsDados },
    });
  };

  console.log(dados);

  return (
    <TabelaContainer>
      <Cabecalho>
        <Linha>
          <CabecalhoCelula width="5%">Horário</CabecalhoCelula>

          <CabecalhoCelula width="20%">Paciente</CabecalhoCelula>
          <CabecalhoCelula width="10%">Idade</CabecalhoCelula>
          <CabecalhoCelula width="20%">Procedimento</CabecalhoCelula>

          <CabecalhoCelula width="10%"></CabecalhoCelula>
        </Linha>
      </Cabecalho>
      <tbody>
        {dados.map((item, index) => {
          const detalheAgendamento = item.detalheAgendamento;
          const agendamentoInfo = detalheAgendamento?.[0];
          const idade = calcularIdade(item.dataNascimento);
          item.espera = calcularTempoEspera(item.chegada);

          return (
            <Linha key={index}>
              <Celula width="20%">{item.nomePaciente}</Celula>
              <Celula width="10%">{idade}</Celula>
              <Celula width="20%">
                {agendamentoInfo.agendamento
                  ? agendamentoInfo.agendamento
                  : "---"}
              </Celula>

              <Celula width="6%">
                <ButtonAtender
                  onClick={() => handleNavigateToProntuario(item, dados)}
                >
                  Atender
                </ButtonAtender>
              </Celula>
            </Linha>
          );
        })}
      </tbody>
    </TabelaContainer>
  );
};

export default TabelaAtendimentos;
