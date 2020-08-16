import React, { Fragment, useState, useEffect, useRef } from 'react';

/* Styles */
import styles from './styles';

/* Components */
import Layout from 'components/Layout';
import Devitt from 'components/Devitt';
import useUser from 'hooks/useUser';
import FloatingButton from 'components/FloatingButton';
import Pen from 'components/Icons/Pen';
import { colors } from 'styles/theme';
import { getLastDeveets } from 'firebase/client';
import Spinner from 'components/Spinner';

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

   return (
      <Fragment>
         <Layout title="Inicio / Devtter">
            <div className="content" ref={el}>
               <header>
                  <a onClick={() => el.current?.scrollTo(0, 0)}>
                     <h2>Inicio</h2>
                  </a>
               </header>
               <section>
                  {loading && <Spinner />}
                  {timeline.map(({ avatar, id, username, message, name }) => (
                     <Devitt
                        id={id}
                        avatar={avatar}
                        key={id}
                        username={username}
                        message={message}
                        name={name}
                     />
                  ))}
               </section>
               <FloatingButton to="/compose/deveet">
                  <Pen
                     width="21"
                     height="21"
                     fill={colors.white}
                     stroke={colors.white}
                  />
               </FloatingButton>
               <nav></nav>
            </div>
         </Layout>
         <style jsx>{styles}</style>
      </Fragment>
   );
};

export default Home;
