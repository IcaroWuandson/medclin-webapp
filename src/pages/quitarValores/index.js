import React, { useState } from "react";
import {
  Container,
  ContentWrapper,
  CustomP,
  DivTable,
  DivFlex,
  Label,
  FormGroup,
  Input,
  DivColumn,
  ButtonSave,
  Select,
  DivTotal,
  TextTotal,
} from "./styles";
import Sidebar from "../../components/sidebar";
import { useLocation } from "react-router-dom";
import { supabase } from "../../services/supabase";
import TabelaContoleOrcamento from "../../components/tabelas/tabelaControleOrcamento";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";

const QuitarValores = () => {
  const location = useLocation();
  const agendamento = location.state?.agendamento;

  const [valorTotal, setValorTotal] = useState(0);
  const [formaPagamento1, setFormaPagamento1] = useState("");
  const [valorFormaPagamento1, setValorFormaPagamento1] = useState(0);
  const [formaPagamento2, setFormaPagamento2] = useState("");
  const [valorFormaPagamento2, setValorFormaPagamento2] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <ContentWrapper>
          <CustomP>
            Selecionar todos os itens para aplicar desconto/acréscimo
          </CustomP>
          <DivTable>
            <TabelaContoleOrcamento />
          </DivTable>

          <DivTotal>
            <DivFlex>
              <TextTotal>VALOR TOTAL</TextTotal>
              <Input customWidth="5.26vw" value={valorTotal} readOnly />
            </DivFlex>
          </DivTotal>

          <DivFlex>
            <FormGroup>
              <Label>Forma de pagamento:</Label>
              <DivColumn>
                <Select
                  customWidth="12vw"
                  value={formaPagamento1}
                  onChange={(e) => setFormaPagamento1(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Espécie">Espécie</option>
                  <option value="Pix">Pix</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                </Select>
                <Select
                  customWidth="12vw"
                  value={formaPagamento2}
                  onChange={(e) => setFormaPagamento2(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="Espécie">Espécie</option>
                  <option value="Pix">Pix</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                </Select>
              </DivColumn>
            </FormGroup>

            <FormGroup>
              <Label>Valor:</Label>
              <DivColumn>
                <Input
                  customWidth="12vw"
                  type="number"
                  value={valorFormaPagamento1}
                  onChange={(e) =>
                    setValorFormaPagamento1(parseFloat(e.target.value))
                  }
                />
                <Input
                  customWidth="12vw"
                  type="number"
                  value={valorFormaPagamento2}
                  onChange={(e) =>
                    setValorFormaPagamento2(parseFloat(e.target.value))
                  }
                />
              </DivColumn>
            </FormGroup>
          </DivFlex>

          <ButtonSave>Concluir</ButtonSave>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default QuitarValores;
