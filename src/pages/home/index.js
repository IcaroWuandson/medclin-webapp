import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import {
  HomeContainer,
  Body,
  CardContainer,
  GraficContainer,
  DivSign,
  TextSign,
} from "./styles";
import Header from "../../components/header";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar />
        <Body>
          <CardContainer></CardContainer>
        </Body>
      </HomeContainer>
    </>
  );
}

export default Home;
