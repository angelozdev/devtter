import React from 'react';
import { colors } from 'styles/theme';
import Link from 'next/link';

type Props = { children: JSX.Element | string; to: string };

const FloatingButton: React.FC<Props> = ({ children, to }: Props) => {
   return (
      <>
         <Link href={to}>
            <button>{children}</button>
         </Link>
         <style jsx>{`
            button {
               width: 59px;
               height: 59px;
               position: absolute;
               bottom: calc(49px + 20px);
               right: 20px;
               background-color: ${colors.primary};
               border-radius: 50%;
               border: none;
               outline: none;
               box-shadow: rgba(136, 153, 166, 0.2) 0px 0px 10px,
                  rgba(136, 153, 166, 0.25) 0px 1px 3px 1px;
            }
         `}</style>
      </>
   );
};

export default FloatingButton;
