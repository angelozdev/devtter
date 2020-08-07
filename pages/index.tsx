import React, { Fragment, useState, useEffect } from 'react';
import {
   loginWithGitHub,
   onAuthStateChanged,
   mapUserFromFirebaseAuth
} from '../firebase/client';

/* Styles */
import { colors, breakpoints } from '../styles/theme';

/* Components */
import Layout from '../components/Layout';
import Button from '../components/Button';
import GitHub from '../components/Icons/GitHub';

/* Interfaces */
export interface IUser {
   avatar: string;
   email: string;
   username: string;
}

const IndexPage = () => {
   const [user, setUser] = useState<undefined | IUser | null>(undefined);
   const [error, setError] = useState<null | Error>(null);

   useEffect(() => {
      onAuthStateChanged(setUser);
   }, []);

   const handleClick = () => {
      loginWithGitHub()
         .then(({ user }) => {
            if (!user) return;
            const mapedUser = mapUserFromFirebaseAuth(user);
            setUser(mapedUser as IUser);
         })
         .catch((err: Error) => setError(err));
   };

   if (error) {
      return <h1>Opps</h1>;
   }

   return (
      <Fragment>
         <Layout title="Home | devtter">
            <section className="content">
               <figure>
                  <img src="/logo-white.svg" alt="logo" />
               </figure>
               <h1>Devtter</h1>
               <h2>Talk about development with developers</h2>
               {user === null && (
                  <Button onClick={handleClick}>
                     <GitHub width={16} height={16} fill="white" />
                     Login with GitHub
                  </Button>
               )}
               {user && user?.avatar && (
                  <Fragment>
                     <p>Hi, {user.username}!</p>
                     <img src={user.avatar} alt="avatar" />
                  </Fragment>
               )}
            </section>
         </Layout>

         <style jsx>{`
            .content {
               padding: 3rem;
               height: 100%;
               display: grid;
               place-content: center;
               place-items: center;
               color: ${colors.white};
               background-color: ${colors.primary};
            }
            figure {
               margin: 0;
               padding: 0;
               display: flex;
               justify-content: center;
            }
            img {
               width: 120px;
               border-radius: 50%;
               padding: 0.2rem;
               border: 1px solid ${colors.white};
            }

            h1 {
               margin: 0;
               font-size: 2rem;
               font-weight: 400;
               color: ${colors.white};
            }
            h2 {
               font-weight: 300;
               font-size: 1.2rem;
               margin-top: 0;
               text-align: center;
               color: ${colors.gray};
            }

            @media (min-width: ${breakpoints.mobileL}) {
               border-radius: 0.5rem;
            }
         `}</style>
      </Fragment>
   );
};

export default IndexPage;
