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
      ${({ row }) =>
        row &&
        css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
        `}
    `}

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.maxwidth};
<<<<<<< HEAD
=======
    padding: 2rem 0;
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
  }
  ${({ noPadding }) =>
    noPadding &&
    css`
<<<<<<< HEAD
      padding-left: 0;
      padding-right: 0;
    `}
  
  ${({ paddingTop }) =>
    paddingTop &&
    css`
      ${({ theme }) => theme.media.tablet} {
        padding-top:10rem;
    } 
    `}

=======
      padding: 0;
    `}
>>>>>>> 0dba97bea165e43e28b152cdaca28c074bdff696
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
  ${({ relative }) =>
    relative &&
    css`
      position: relative;
    `}
`;

export default StyledContainer;
