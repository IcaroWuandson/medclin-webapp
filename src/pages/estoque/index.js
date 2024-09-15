import React from "react";
import Sidebar from "../../components/sidebar";
import { Tabs, TabList, TabPanels } from "@chakra-ui/react";
import {
  Container,
  ContentWrapper,
  CustomTab,
  CustomTabPanel,
  DivTabs,
  TextTab,
} from "./styles";
import Header from "../../components/header";

const Estoque = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <ContentWrapper>
          <Tabs>
            <DivTabs>
              <TabList>
                <CustomTab>
                  <TextTab>Insumos</TextTab>
                </CustomTab>
                <CustomTab>
                  <TextTab>Material de escritório</TextTab>
                </CustomTab>
                <CustomTab>
                  <TextTab>Equipamentos médicos</TextTab>
                </CustomTab>
                <CustomTab>
                  <TextTab>Medicamentos</TextTab>
                </CustomTab>
                <CustomTab>
                  <TextTab>Outros</TextTab>
                </CustomTab>
              </TabList>
            </DivTabs>

            <TabPanels>
              <CustomTabPanel></CustomTabPanel>
              <CustomTabPanel></CustomTabPanel>
              <CustomTabPanel></CustomTabPanel>
            </TabPanels>
          </Tabs>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Estoque;
