import styled from "styled-components";

export const ReviewPage = styled.div`
  background-color: ${({ theme }) => theme.colors.defaultGrey};
  padding-top: 20px;
`;

export const ReviewPageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 30px auto;
  div {
    outline: none;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  padding: 20px;
  max-width: 400px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 25px;
  padding-right: 25px;
  max-width: 200px;
  height: 35px;
  margin-right: auto;
  &:disabled {
    cursor: unset;
  }
  &:not([disabled]):hover,
  &:not([disabled]):focus {
    background-color: ${({ theme }) => theme.colors.semiDarkGrey};
    color: ${({ theme }) => theme.colors.black};
    outline: none;
  }
  .align-left {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ReviewForm = styled.div`
  padding-top: 50px;
`;
