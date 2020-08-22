import React, { Fragment, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getLastDeveets } from 'firebase/client';
import useUser from 'hooks/useUser';

/* Styles */
import styles from './styles';
import { colors } from 'styles/theme';

/* Components */
import Layout from 'components/Layout';
import Devitt from 'components/Devitt';
import FloatingButton from 'components/FloatingButton';
import Spinner from 'components/Spinner';

/* Icons */
import Pen from 'components/Icons/Pen';
import HomeIcon from 'components/Icons/Home';
import NotificationIcon from 'components/Icons/Notification';
import SearchIcon from 'components/Icons/Search';
import Message from 'components/Icons/Inbox';

const Home = () => {
   const { user } = useUser();
   const [loading, setLoading] = useState(true);
   const [timeline, setTimeline] = useState<Array<any>>([]);
   const el = useRef<HTMLDivElement>(null);
   useEffect(() => {
      setLoading(true);
      user &&
         getLastDeveets().then((deveets) => {
            setTimeline(deveets);
            setLoading(false);
         });
   }, [user]);

   const scrollTop = () => {
      el.current?.scrollTo(0, 0);
   };

   return (
      <Fragment>
         <Layout title="Inicio / Devtter">
            <div className="content" ref={el}>
               <header>
                  <a onClick={scrollTop}>
                     <h2>Inicio</h2>
                  </a>
               </header>
               <section>
                  {loading && <Spinner />}
                  {timeline.map(
                     ({ avatar, id, username, message, name, createAt }) => (
                        <Devitt
                           id={id}
                           avatar={avatar}
                           key={id}
                           username={username}
                           message={message}
                           name={name}
                           createAt={createAt}
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
         </Layout>
         <style jsx>{styles}</style>
      </Fragment>
   );
};

export default Home;
