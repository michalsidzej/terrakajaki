import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledListItem = styled.li`
<<<<<<< HEAD
  padding: 0.5rem 2rem;
=======
  padding: 0.5rem 1rem;
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
<<<<<<< HEAD
  text-transform: uppercase;
  &:hover, &:active {
=======
  &:hover {
    text-decoration: underline;
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
    color: ${({ theme }) => theme.color.secondary};
  }
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>
      <StyledLink to="/sklep/">Kajaki</StyledLink>
    </StyledListItem>
<<<<<<< HEAD
    <StyledListItem>
      <StyledLink to='/#about'>O nas</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink  to='/#contact'>Kontakt</StyledLink>  
    </StyledListItem>
=======
    <StyledListItem>Aktualności</StyledListItem>
    <StyledListItem>Kontakt</StyledListItem>
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
  </StyledList>
);

export default Nav;
