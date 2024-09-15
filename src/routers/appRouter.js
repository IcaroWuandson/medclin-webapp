import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Agenda from "../pages/agenda";
import Financeiro from "../pages/financeiro";
import Pacientes from "../pages/pacientes";
import Atendimentos from "../pages/atendimentos";

import CadastroDePacientes from "../components/cadastroDePacientes";
import Prontuario from "../pages/prontuario";
import QuitarValores from "../pages/quitarValores";
import Cadastros from "../pages/cadastros";
import Estoque from "../pages/estoque";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/atendimentos" element={<Atendimentos />} />
      <Route path="/estoque" element={<Estoque />} />

      <Route path="/cadastrar-paciente" element={<CadastroDePacientes />} />
      <Route path="/prontuario/:id" element={<Prontuario />} />
      <Route path="/quitar-valores" element={<QuitarValores />} />
      <Route path="/cadastros" element={<Cadastros />} />
    </Routes>
  );
};

export default AppRouter;
