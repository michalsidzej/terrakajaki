import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledListItem = styled.li``;
const Nav = () => (
  <StyledList>
    <StyledListItem>Kajaki</StyledListItem>
    <StyledListItem>Aktualności</StyledListItem>
    <StyledListItem>Kontakt</StyledListItem>
  </StyledList>
);

export default Nav;
