import React, { Fragment, useState, useEffect, useRef, FC } from 'react';
import Link from 'next/link';
import { listenLatestDevits } from 'firebase/client';
import useUser from 'hooks/useUser';

/* Styles */
import { animations, breakpoints, colors } from 'style/theme';

/* Components */
import Devitt from 'components/Devitt';
import FloatingButton from 'components/FloatingButton';
import Spinner from 'components/Spinner';

/* Icons */
import Pen from 'components/Icons/Pen';
import HomeIcon from 'components/Icons/Home';
import NotificationIcon from 'components/Icons/Notification';
import SearchIcon from 'components/Icons/Search';
import Message from 'components/Icons/Inbox';

const Home: FC = (): JSX.Element => {
   const { user } = useUser();
   const [loading, setLoading] = useState(true);
   const [timeline, setTimeline] = useState<Array<any>>([]);
   const el = useRef<HTMLDivElement>(null);

   useEffect(() => {
      setLoading(true);
      let unsubscribe: () => void;

      if (user) {
         unsubscribe = listenLatestDevits(setTimeline);
      }

      setLoading(false);
      return () => unsubscribe && unsubscribe();
   }, [user]);

   const scrollTop = () => {
      el.current?.scrollTo(0, 0);
   };

   return (
      <Fragment>
         <div className="content" ref={el}>
            <header>
               <a onClick={scrollTop}>
                  <h2>Inicio</h2>
               </a>
            </header>
            <section>
               {loading && <Spinner />}
               {timeline.map(
                  ({ avatar, id, username, message, name, createAt, img }) => (
                     <Devitt
                        id={id}
                        avatar={avatar}
                        key={id}
                        username={username}
                        message={message}
                        name={name}
                        createAt={createAt}
                        img={img}
                     />
                  )
               )}
            </section>
            <FloatingButton to="/compose/deveet">
               <Pen
                  width="21"
                  height="21"
                  fill={colors.white}
                  stroke={colors.white}
               />
            </FloatingButton>
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
               <Link href="">
                  <a>
                     <SearchIcon width="27px" height="27px" />
                  </a>
               </Link>
               <Link href="">
                  <a>
                     <NotificationIcon width="27px" height="27px" />
                  </a>
               </Link>
               <Link href="">
                  <a>
                     <Message width="27px" height="27px" />
                  </a>
               </Link>
            </nav>
         </div>
         <style jsx>{`
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
               transition: all ${animations.transition};
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
         `}</style>
      </Fragment>
   );
};

export default Home;
