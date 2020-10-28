import React from 'react';
import { colors } from 'style/theme';

/* Types */
interface Props {
   element: React.RefObject<HTMLElement>;
}

const Header = ({ element }: Props): JSX.Element => {
   const scrollTop = (element: React.RefObject<HTMLElement>) => {
      element.current?.scrollTo(0, 0);
   };

   return (
      <React.Fragment>
         <header>
            <a onClick={() => scrollTop(element)}>
               <h2>Inicio</h2>
            </a>
         </header>
         <style jsx>{`
            header {
               display: flex;
               align-items: center;
               top: 0;
               border-bottom: 1px solid ${colors.darkGray};
               position: sticky;
               left: 0;
               right: 0;
               height: 49px;
               width: 100%;
               backdrop-filter: blur(3px);
               background-color: ${colors.Lightblack}ee;
               z-index: 10;
            }

            header h2 {
               margin: 0;
               padding: 0;
               font-weight: 800;
               font-size: 1rem;
               margin-left: 2rem;
               cursor: pointer;
            }
         `}</style>
      </React.Fragment>
   );
};

export default Header;
