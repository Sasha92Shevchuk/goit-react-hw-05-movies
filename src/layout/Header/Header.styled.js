import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  padding-left: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 19px -3px rgba(148, 148, 148, 1);
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    height: 60px;
    margin: 0;
    padding: 0;
    li:hover,
    li:focus {
      transform: scale(1.1);
      transition: all 250ms;
    }
    a {
      text-decoration: none;
    }
  }
`;
