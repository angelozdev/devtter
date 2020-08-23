import css from 'styled-jsx/css';
import { breakpoints, colors } from 'styles/theme';

export default css`
   .content {
      width: 100%;
      height: 100%;
      max-width: 425px;
      min-height: calc(90vh - 49px - 49px);
      padding-top: 0;
      padding-bottom: 0;
      color: ${colors.white};
      background-color: ${colors.Lightblack};
      overflow-y: scroll;
      scroll-behavior: smooth;
   }

   section {
      min-height: calc(100% - 49px - 49px);
   }

   header {
      display: flex;
      align-items: center;
      top: 0;
      border-bottom: 1px solid ${colors.darkGray};
   }

   header h2 {
      margin: 0;
      padding: 0;
      font-weight: 800;
      font-size: 1rem;
      margin-left: 2rem;
      cursor: pointer;
   }

   nav,
   header {
      position: sticky;
      left: 0;
      right: 0;
      height: 49px;
      width: 100%;
      backdrop-filter: blur(3px);
      background-color: ${colors.Lightblack}ee;
      z-index: 10;
   }

   nav {
      bottom: 0;
      border-top: 1px solid ${colors.darkGray};
      display: flex;
      justify-content: space-around;
      align-items: center;
   }

   nav a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      transition: all ease 200ms;
   }

   nav a:hover {
      background-color: ${colors.primary}0f;
   }

   nav a:hover > :global(svg) {
      stroke: ${colors.primary};
   }

   @media (min-width: ${breakpoints.mobileL}) {
      .content {
         border-radius: 0.5rem;
      }
   }
`;
