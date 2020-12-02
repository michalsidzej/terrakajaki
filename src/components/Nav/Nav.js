import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledListItem = styled.li`
  padding: 0.5rem 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  &:hover, &:active {
    color: ${({ theme }) => theme.color.secondary};
  }
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>
      <StyledLink to="/sklep/">Kajaki</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink to='/#about'>O nas</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink  to='/#contact'>Kontakt</StyledLink>  
    </StyledListItem>
  </StyledList>
);

export default Nav;
