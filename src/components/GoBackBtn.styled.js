import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(NavLink)`
  width: fit-content;
  height: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: green;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 250ms;
  :hover {
    background: #0d47a1;
  }
`;
