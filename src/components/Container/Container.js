import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ${({ center }) =>
        center &&
        css`
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}

      ${({ spaceEvenly }) =>
        spaceEvenly &&
        css`
          ${({ theme }) => theme.media.tablet} {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
          }
        `}
    
    ${({ column }) =>
        column &&
        css`
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        `}
    `}

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.maxwidth};
    padding: 2rem 0;
  }
  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `}
  ${({ widthAuto }) =>
    widthAuto &&
    css`
      width: auto;
    `}
`;

export default StyledContainer;
