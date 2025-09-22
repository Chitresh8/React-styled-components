import React from "react";
import { Container } from "./Container/Container.styled";
import { Header } from "./Header";

export const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello, Styled Components...!</h1>
      </Container>
    </>
  );
};
