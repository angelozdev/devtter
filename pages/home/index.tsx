import React, { Fragment, useState, useEffect, useRef } from 'react';
import { listenLatestDevits } from 'firebase/client';
import useUser from 'hooks/useUser';

/* Styles */
import { breakpoints, colors } from 'style/theme';

/* Components */
import { Devitt, Spinner, FloatingButton, BottomBar, Header } from 'components';

/* Icons */
import Pen from 'components/Icons/Pen';

const Home = (): JSX.Element => {
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

   return (
      <Fragment>
         <div className="content" ref={el}>
            <Header element={el} />
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
            <BottomBar element={el} />
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
