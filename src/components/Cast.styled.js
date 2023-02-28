import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 160px;
  height: fit-content;
  padding-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
`;
export const Image = styled.img`
  display: block;
  width: 160px;
  height: 240px;
  border-radius: 10px 10px 0 0;
`;
