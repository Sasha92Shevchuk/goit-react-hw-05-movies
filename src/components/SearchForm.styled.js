import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  gap: 10px;
`;
export const Input = styled.input`
  display: inline-block;
  width: 400px;
  font: inherit;
  outline: none;
  font-size: 16px;
  padding-left: 4px;
  padding-right: 4px;
`;
export const SearchButton = styled.button`
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid;
  border-radius: 5px;
  background-color: lightblue;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: lightgreen;
    padding: 3px 10px;
  }
`;
