import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { User, SignOut } from "@phosphor-icons/react";
import logo from "../../assets/logo.png";
import { colors } from "../../theme";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${colors.third};
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
`;

const WelcomeImage = styled.img`
  width: 8vw;
  height: 10vh;
  margin-left: 50px;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  width: 10vw;
  height: 3.2vh;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.secondary};
    transform: scale(1.09);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ButtonLogout = styled.button`
  background-color: #f7f7f7;
  color: black;
  width: 10vw;
  height: 3.2vh;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.09);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-left: 5.78vw;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/plataforma/perfil");
  };

  const handleLogOutClick = () => {
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <WelcomeImage src={logo} alt="sias3" />

      <DivButtons>
        <Button onClick={handleProfileClick}>
          <User size={20} />
          Meu perfil
        </Button>
        <ButtonLogout onClick={handleLogOutClick}>
          <SignOut size={20} />
          Sair da conta
        </ButtonLogout>
      </DivButtons>
    </HeaderContainer>
  );
};

export default Header;
