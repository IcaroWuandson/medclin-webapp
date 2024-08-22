import styled from "styled-components";
import { colors } from "../../theme";
export const ButtonSave = styled.button`
  background-color: ${colors.third};
  color: ${colors.white};
  border-radius: 5px;
  border: none;
  width: 9.12vw;
  height: 3.89vh;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  }
`;
