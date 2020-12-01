import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledListItem = styled.li`
  padding: 0.5rem 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>
      <StyledLink to="/sklep/">Kajaki</StyledLink>
    </StyledListItem>
    <StyledListItem>Aktualności</StyledListItem>
    <StyledListItem>Kontakt</StyledListItem>
  </StyledList>
);

export default Nav;
