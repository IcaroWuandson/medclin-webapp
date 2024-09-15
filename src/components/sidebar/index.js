import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SidebarItem,
  SidebarLink,
  SidebarList,
  SidebarText,
  SidebarWrapper,
} from "./styles";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardNumber) => {
    if (cardNumber === 1) {
      navigate(`/plataforma/agenda`);
    } else if (cardNumber === 2) {
      navigate(`/plataforma/atendimentos`);
    } else if (cardNumber === 3) {
      navigate(`/plataforma/cadastros`);
    } else if (cardNumber === 4) {
      navigate(`/plataforma/financeiro`);
    } else if (cardNumber === 5) {
      navigate(`/plataforma/estoque`);
    }
  };

  return (
    <Container>
      <SidebarWrapper>
        <SidebarList>
          <SidebarItem onClick={() => handleCardClick(1)}>
            <SidebarLink>
              <SidebarText>Agenda</SidebarText>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem onClick={() => handleCardClick(2)}>
            <SidebarLink>
              <SidebarText>Atendimentos</SidebarText>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem onClick={() => handleCardClick(3)}>
            <SidebarLink>
              <SidebarText>Cadastros</SidebarText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem onClick={() => handleCardClick(4)}>
            <SidebarLink>
              <SidebarText>Financeiro</SidebarText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem onClick={() => handleCardClick(5)}>
            <SidebarLink>
              <SidebarText>Estoque</SidebarText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem onClick={() => handleCardClick(6)}>
            <SidebarLink>
              <SidebarText>Tabelas</SidebarText>
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
