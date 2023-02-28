import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 250ms ease;
  :hover,
  :focus {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;
export const PosterImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const TitleMovie = styled.h2`
  padding: 5px;
  text-align: center;
`;
