import React, { Fragment } from 'react';
import { colors } from 'styles/theme';

type Type = 'button' | 'submit' | 'reset';
interface IProps {
   children: (JSX.Element | string)[] | string;
   type?: Type;
   bgColor?: string;
   color?: string;
   onClick?: () => any;
   disabled?: boolean;
}

const Button = ({
   children,
   type = 'button',
   onClick,
   bgColor = colors.black,
   color = colors.white,
   disabled = false
}: IProps) => {
   return (
      <Fragment>
         <button disabled={disabled} type={type} onClick={onClick}>
            {children}
         </button>

         <style jsx>{`
            button {
               display: flex;
               align-items: center;
               border: 0;
               background-color: ${bgColor};
               padding: 0.4em 1.2em;
               color: ${color};
               border-radius: 2em;
               outline: none;
               cursor: pointer;
               font-size: 1em;
               font-weight: bold;
               transition: opacity 0.3s ease;
               -webkit-tap-highlight-color: transparent;
            }

            button > :global(svg) {
               margin-right: 0.5em;
            }

            button:hover {
               opacity: 0.9;
            }

            button:disabled {
               opacity: 0.5;
               cursor: default;
            }
         `}</style>
      </Fragment>
   );
};

export default Button;
