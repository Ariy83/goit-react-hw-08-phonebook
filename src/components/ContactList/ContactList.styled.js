import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  font-size: calc((1vh + 1vw));
  width: calc((10vh + 20vw) * 1.2);
  padding: 30px 25px;
  /* border-radius: 12px; */
  /* border: 1px solid lightgray;
  box-shadow: 3px 4px 7px 3px lightgray; */
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
