import React from 'react';
import Link from 'next/link';

/* Icons */
import {
   Home as HomeIcon,
   Search as SearchIcon,
   Notification as NotificationIcon,
   Inbox as Message
} from 'components/Icons';

/* Styles */
import { animations, colors } from 'style/theme';

/* Types */
interface Props {
   element: React.RefObject<HTMLElement>;
}

const BottomBar = ({ element }: Props): JSX.Element => {
   const scrollTop = () => {
      element.current?.scrollTo(0, 0);
   };
   return (
      <React.Fragment>
         <nav>
            <Link href="/home">
               <a onClick={scrollTop}>
                  <HomeIcon
                     width="27px"
                     height="27px"
                     stroke={colors.primary}
                     strokeWidth="1px"
                  />
               </a>
            </Link>
            <Link href="/">
               <a>
                  <SearchIcon width="27px" height="27px" />
               </a>
            </Link>
            <Link href="/">
               <a>
                  <NotificationIcon width="27px" height="27px" />
               </a>
            </Link>
            <Link href="/">
               <a>
                  <Message width="27px" height="27px" />
               </a>
            </Link>
         </nav>
         <style jsx>{`
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
               transition: all ${animations.transition};
            }

            nav a:hover {
               background-color: ${colors.primary}0f;
            }

            nav a:hover > :global(svg) {
               stroke: ${colors.primary};
            }
         `}</style>
      </React.Fragment>
   );
};

export default BottomBar;
