import css from 'styled-jsx/css';
import { colors, breakpoints, fonts } from '../../styles/theme';

export const globalStyles = css.global`
   * {
      box-sizing: border-box;
   }

   body {
      width: 100%;
      min-height: 100vh;
      margin : 0;
      padding: 0;
      display: grid;
      place-items: center;
      font-family: ${fonts.base};
      background:
         radial-gradient(${colors.primary} 1px, transparent 1px) 1px 1px;
      background-color:#fff;
      background-size: 7px 7px;
   }

   img {
      user-drag        : none;
      -webkit-user-drag: none;
      user-select        : none;
      -ms-user-select    : none;
      -moz-user-select   : none;
      -webkit-user-select: none;
   }
`


export default css`
   main {
      width : 100vw;
      height: 100vh;
      padding: 1em;
      margin-right: auto;
      margin-left : auto;
      background-color: #fff;
   }

   @media (min-width: ${breakpoints.mobileL}){
      main {
         -webkit-box-shadow: 0px 7px 14px 1px rgba(0,0,0,0.15);
         -moz-box-shadow: 0px 7px 14px 1px rgba(0,0,0,0.15);
         box-shadow: 0px 7px 14px 1px rgba(0,0,0,0.15);
         width: 100%;
         height: 90vh;
         border-radius: 1em;
      }
   }
`