import styled from "styled-components";
import { breakpoint } from "../../../../styles/BreakPoint";

export const ProductPage = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    padding-top: 100px;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  `};
`;

export const ProductTiles = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 25px 0;
  position: relative;
  text-transform: capitalize;

  ${breakpoint.md`
    transition: 0.2s;
    border-left: 2px solid ${({ theme }) => theme.colors.transparent};
    border-bottom: 2px solid ${({ theme }) => theme.colors.transparent};
    border-right: none;
    flex: 0 0 25%%;
    &:hover {
      border-left: 2px solid ${({ theme }) => theme.colors.black};
      border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    }
  `};
`;

export const ProductArticleNumber = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.semiDarkGrey};
`;

export const ProductDescription = styled.p`
  padding-top: 10px;
`;

export const ProductImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  ${breakpoint.md`
    max-width: 250px;
  `};
`;

export const Column = styled.div`
  position: relative;
  padding: 20px;
`;

export const ProductName = styled.p`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 150px;
  padding: 3px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 5px;
  ${breakpoint.md`
    padding-left: 20px;
    padding-right: 20px;
  `};
`;

export const ProductPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.red};
`;

export const Border = styled.div`
  width: 80%;
  height: 2px;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
`;
