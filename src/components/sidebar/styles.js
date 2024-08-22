import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  height: 90vh;
  background-color: ${colors.third};
  z-index: 500;
`;

export const SidebarWrapper = styled.div`
  width: 11vw;
  background-color: ${colors.third};
  box-sizing: border-box;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-top: 10.93vh;
  height: 100vh;
  justify-content: flex-start;
  gap: 5px;
`;

export const SidebarItem = styled.li`
  cursor: pointer;
  height: 3.39vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  margin: 5px;
  align-items: center;
  border-radius: 5px;
  padding-left: 10px;
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export const SidebarLink = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const SidebarText = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 5px;
`;
