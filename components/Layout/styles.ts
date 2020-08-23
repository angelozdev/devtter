import css from 'styled-jsx/css';
import { colors, breakpoints, fonts } from 'styles/theme';

export const globalStyles = css.global`
   * {
      box-sizing: border-box;
   }

   a {
      color: ${colors.white};
      text-decoration: none;
   }

   body {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      display: grid;
      place-items: center;
      font-family: ${fonts.base};
      background: radial-gradient(${colors.Lightblack} 1px, transparent 1px);
      background-color: ${colors.white};
      background-size: 20px 20px;
   }

   img,
   svg,
   a,
   button {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-drag: none;
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
   }
   textarea::-webkit-input-placeholder,
   textarea,
   input {
      font-family: ${fonts.base};
   }
`;

export default css`
   main {
      width: 100vw;
      height: 100vh;
      margin-right: auto;
      margin-left: auto;
      background-color: #fff;
   }

   @media (min-width: ${breakpoints.mobileL}) {
      main {
         -webkit-box-shadow: 0px 7px 14px 1px rgba(0, 0, 0, 0.15);
         -moz-box-shadow: 0px 7px 14px 1px rgba(0, 0, 0, 0.15);
         box-shadow: 0px 7px 14px 1px rgba(0, 0, 0, 0.15);
         width: 100%;
         min-width: 425px;
         height: 90vh;
         border-radius: 1rem;
      }
   }
`;
