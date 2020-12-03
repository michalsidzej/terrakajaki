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
  &:last-child {
    padding-right: 0;
  }  
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.black};
  text-transform: uppercase;
  &:hover, &:active {
    color: ${({ theme }) => theme.color.primary};
    
  }
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>
      <StyledLink to="/sklep/">Sklep</StyledLink>
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
