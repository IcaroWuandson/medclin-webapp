import styled from "styled-components";
import { colors } from "../../theme";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export const InputField = styled.input`
  width: 25vw;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #b8b8b8;
  transition: border-bottom 0.2s;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #888;
    font-style: italic;
  }
`;

export const SubmitButton = styled.button`
  width: 25vw;
  height: 40px;
  background-color: ${colors.third};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: black;
  font-weight: 600;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const Card1 = styled.div`
  background-color: ${colors.third};
  width: 50vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const RightImage = styled.img`
  width: 19vw;
  height: 33vh;
`;

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 50vw;
  height: 100vh;
  margin: 0;
`;

export const TextAviso = styled.p`
  font-size: 10px;
  text-align: justify;
  width: 25vw;
`;

export const ContentCard1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FraseTres = styled.p`
  font-weight: 400;
  font-size: 26px;
  text-align: start;
  margin-top: 15px;
  text-align: justify;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;
