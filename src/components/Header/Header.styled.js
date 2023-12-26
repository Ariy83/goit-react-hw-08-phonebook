import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  padding: 15px 40px;
  background-color: lightgray;
  font-size: 1.1rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  nav {
    display: flex;
    gap: 10px;
  }
`;
