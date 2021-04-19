import styled from "styled-components";
import { breakpoint } from "../../../../../styles/BreakPoint";

export const ReviewContainer = styled.p`
  width: 100%;
  text-transform: capitalize;
`;

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    flex-direction: row;
  `}
`;

export const ReviewDescription = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const ReviewArticleNumber = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.semiDarkGrey};
`;

export const ReviewImage = styled.img`
  width: 100%;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const ReviewName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const ReviewPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 20px;
`;

export const Column = styled.div`
  flex: 0 0 50%;
  padding: 20px;
  text-align: center;
  ${breakpoint.md`
    text-align: left;
  `}
`;

export const InnerColumn = styled.div`
  align-items: center;
`;

export const Border = styled.div`
  width: 80%;
  height: 2px;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.semiDarkGrey};
`;

export const ProductName = styled.div`
  border-radius: 30px;
  background-color: #000000;
  color: #ffffff;
  width: 150px;
  padding: 3px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: -15px;
  ${breakpoint.md`
    width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: -20px;
  `}
`;
