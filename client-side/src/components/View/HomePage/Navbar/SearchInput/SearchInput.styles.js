import styled from "styled-components";
import { breakpoint } from "../../../../../styles/BreakPoint";

export const Navbar = styled.nav`
  width: 100%;
  top: 0;
  position: fixed;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.black};
  ${breakpoint.md`
    height: 5rem;
  `};
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 3px 6px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
