import React from "react";
import { Navbar } from "../View/HomePage/Navbar/Navbar";
import Products from "../View/HomePage/Products/Products";
import { Container } from "./HomePage.styles";

export const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Products />
    </Container>
  );
};
