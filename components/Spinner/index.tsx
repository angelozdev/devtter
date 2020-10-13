import React from 'react';
import { colors } from 'style/theme';

const Spinner: React.FC = () => {
   return (
      <div className="container">
         <div className="lds-hourglass"></div>
         <style jsx>{`
            .container {
               display: flex;
               justify-content: center;
               align-items: center;
               heigth: 100vh;
               width: 100vw;
               position: absolute;
               top: 0;
               bottom: 0;
               left: 0;
               right: 0;
               background-color: ${colors.Lightblack};
               z-index: 10;
            }
            .lds-hourglass {
               display: inline-block;
               position: relative;
               width: 80px;
               height: 80px;
            }
            .lds-hourglass:after {
               content: ' ';
               display: block;
               border-radius: 50%;
               width: 0;
               height: 0;
               margin: 8px;
               box-sizing: border-box;
               border: 32px solid ${colors.white};
               border-color: ${colors.white} transparent ${colors.white}
                  transparent;
               animation: lds-hourglass 1.2s infinite;
            }
            @keyframes lds-hourglass {
               0% {
                  transform: rotate(0);
                  animation-timing-function: cubic-bezier(
                     0.55,
                     0.055,
                     0.675,
                     0.19
                  );
               }
               50% {
                  transform: rotate(900deg);
                  animation-timing-function: cubic-bezier(
                     0.215,
                     0.61,
                     0.355,
                     1
                  );
               }
               100% {
                  transform: rotate(1800deg);
               }
            }
         `}</style>
      </div>
   );
};

export default Spinner;
