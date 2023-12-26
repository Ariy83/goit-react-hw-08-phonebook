import styled from 'styled-components';

export const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: calc((1vh + 1vw));
`;

export const StyledBtn = styled.button`
  padding: 5px 12px;
  border-radius: 4px;
  border: solid 1px lightgray;
  font-size: calc((1vh + 1vw));
  background-color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
