import styled from "styled-components";
import { breakpoint } from "../../../../../styles/BreakPoint";

export const Navbar = styled.nav`
  width: 100%;
  top: 0;
  position: fixed;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${breakpoint.md`
    height: 7rem;
  `};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.2rem;
  padding: 3px 6px;
`;
