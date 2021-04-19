import styled from "styled-components";
import { breakpoint } from "../../../../../styles/BreakPoint";

export const ReviewListId = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.semiDarkGrey};
  font-size: 10px;
`;
export const ReviewListContainer = styled.div`
  padding: 20px;
  ${breakpoint.md`
   padding: 20px 0;
  `}
`;
export const ReviewList = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left;
  ${breakpoint.md`
    width: 400px;
  `}
`;
export const ReviewListText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  padding-top: 10px;
`;
