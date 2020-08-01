import React, { FC, Fragment } from 'react'
import { colors } from '../../styles/theme';

type Type = "button" | "submit" | "reset";
interface IProps {
   children: (JSX.Element | string)[],
   type?: Type,
   onClick?: () => any
}

const Button: FC<IProps> = ({ children, type = "button", onClick}) => {
   return (
      <Fragment>
         <button type={type} onClick={onClick}>
            { children }
         </button>

         <style jsx>{`
            button {
               display: flex;
               align-items: center;
               border: 0;
               background-color: ${colors.black};
               padding: .6em 1.2em;
               color: #fff;
               border-radius: 2em;
               outline: none;
               cursor: pointer;
               font-size: 1em;
               transition: opacity .3s ease;
               -webkit-tap-highlight-color: transparent;
            }

            button > :global(svg) {
               margin-right: .5em;
            }

            button:hover {
               opacity: .9;
            }
         `}</style>
      </Fragment>
   )
}

export default Button;
