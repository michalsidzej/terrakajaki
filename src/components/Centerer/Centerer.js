import styled, { css } from 'styled-components';

const Centerer = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      ${({ theme }) => theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
      }
    `}
  width: ${({ theme }) => theme.maxwidth};
  max-width: 100%;
  margin: 0 auto;
`;

export default Centerer;
