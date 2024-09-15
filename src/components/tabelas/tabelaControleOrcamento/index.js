import React, { useState, useEffect } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import {
  TabelaContainer,
  Cabecalho,
  Linha,
  CabecalhoCelula,
  Celula,
} from "./styles";
import SidebarDireita from "../sidebarTabela";

const TabelaContoleOrcamento = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState("");

  return (
    <div>
      <TabelaContainer>
        <Cabecalho>
          <Linha>
            <CabecalhoCelula width="10%">Convênio</CabecalhoCelula>
            <CabecalhoCelula width="15%">Agendamento</CabecalhoCelula>
            <CabecalhoCelula width="15%">Valor</CabecalhoCelula>
            <CabecalhoCelula width="10%">Desconto</CabecalhoCelula>
            <CabecalhoCelula width="15%">Acréscimo</CabecalhoCelula>
            <CabecalhoCelula width="15%">Valor Final</CabecalhoCelula>
            <CabecalhoCelula width="5%"></CabecalhoCelula>
          </Linha>
        </Cabecalho>
        <tbody>
          <Linha >
            <Celula width="10%"></Celula>
            <Celula width="15%"></Celula>
            <Celula width="15%"></Celula>
            <Celula width="10%"></Celula>
            <Celula width="15%"></Celula>

            <Celula width="15%"></Celula>
            <Celula width="5%">
              <PencilSimple size={22} />
            </Celula>
          </Linha>
        </tbody>
      </TabelaContainer>
    </div>
  );
};

export default TabelaContoleOrcamento;
