import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-top: 10vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 11.05vw;
  position: absolute;
`;

export const DivButtonActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Labels = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const ButtonAction = styled.button`
  background-color: ${colors.gray};
  height: 3.97vh;
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;

  &:hover {
    background-color: ${colors.third};
    color: black;
  }
`;

export const WelcomeText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primary};
`;
