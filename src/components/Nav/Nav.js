import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
const StyledListItem = styled.li`
  padding: 0 1rem;
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>Kajaki</StyledListItem>
    <StyledListItem>Inspiracje</StyledListItem>
    <StyledListItem>Kontakt</StyledListItem>
  </StyledList>
);

export default Nav;
