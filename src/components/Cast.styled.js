import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 160px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  h4 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;
export const Image = styled.img`
  width: inherit;
  display: block;
`;
