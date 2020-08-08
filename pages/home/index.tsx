import React, { Fragment, useState, useEffect } from 'react';

/* Styles */
import styles from './styles';

/* Components */
import Layout from 'components/Layout';
import Devitt from 'components/Devitt';
// eslint-disable-next-line no-unused-vars
import IDevitt from 'interfaces/devitt';

const Home = () => {
   const [timeline, setTimeline] = useState<Array<IDevitt>>([]);

   useEffect(() => {
      fetch('http://localhost:3000/api/statuses/home_timeline')
         .then((response) => response.json())
         .then((data) => setTimeline(data));
   }, []);
   return (
      <Fragment>
         <Layout title="Inicio / Devtter">
            <div className="content">
               <header>
                  <h2>Inicio</h2>
               </header>
               <section>
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
               <nav></nav>
            </div>
         </Layout>
         <style jsx>{styles}</style>
      </Fragment>
   );
};

export default Home;
