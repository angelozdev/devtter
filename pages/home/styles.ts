import css from 'styled-jsx/css';
import { breakpoints, colors } from 'styles/theme';

export default css`
   .content {
      width: 100%;
      max-width: 425px;
      min-height: calc(90vh - 49px - 49px);
      position: relative;
      padding-top: 0;
      padding-bottom: 0;
      height: 100%;
      color: ${colors.white};
      background-color: ${colors.primary};
      overflow-y: scroll;
   }

   header {
      background-color: ${colors.primary};
      display: flex;
      align-items: center;
      width: 100%;
      height: 49px;
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid ${colors.gray};
   }

   header h2 {
      margin: 0;
      padding: 0;
      font-weight: 800;
      font-size: 1rem;
      margin-left: 2rem;
   }

   nav {
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
      height: 49px;
      border-top: 1px solid ${colors.gray};
      background-color: ${colors.primary};
   }

   @media (min-width: ${breakpoints.mobileL}) {
      .content {
         border-radius: 0.5rem;
      }
   }
`;
