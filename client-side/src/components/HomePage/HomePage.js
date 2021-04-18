import React from "react";
import { SearchInput } from "../View/HomePage/Navbar/SearchInput/SearchInput";
import Products from "../View/HomePage/Products/Products";
import { Container } from "./HomePage.styles";

export const HomePage = () => {
  return (
    <Container>
      <SearchInput />
      <Products />
    </Container>
  );
};
