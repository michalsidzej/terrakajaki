import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 6.4rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  ::after {
    content: '';
    height: 0.4rem;
    width: 5.4rem;
    background-color: ${({ theme }) => theme.color.primary};
    display: block;
    bottom: 0;
  }

  ${({ contact }) =>
    contact &&
    css`
      margin-left: 2rem;
      margin-bottom: 0;
    `}
`;

export default Title;
