import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet} {
    justify-self: end;
  }
`;
const StyledListItem = styled.li`
  padding: 0.5rem 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-size: 1.8rem;
  ${({ theme }) => theme.media.tablet} {
    color: ${({ theme }) => theme.color.black};
    font-size: 2rem;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.color.primary};
      text-decoration: none;
    }
  }
`;
const Nav = () => (
  <StyledList>
    <StyledListItem>
      <StyledLink to="/sklep/">Sklep</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink to="/#about">O&nbsp;nas</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink to="/#contact">Kontakt</StyledLink>
    </StyledListItem>
  </StyledList>
);

export default Nav;
