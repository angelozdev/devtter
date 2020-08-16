import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loginWithGitHub } from 'firebase/client';

/* Styles */
import { colors, breakpoints } from 'styles/theme';

/* Components */
import Layout from 'components/Layout';
import Button from 'components/Button';
import GitHub from 'components/Icons/GitHub';
import Logo from 'components/Icons/Logo';
import Spinner from 'components/Spinner';

/* Hooks */
import useUser, { USER_STATES } from 'hooks/useUser';

const IndexPage = () => {
   const [error, setError] = useState<null | Error>(null);
   const { user, loading } = useUser();
   const router = useRouter();

   useEffect(() => {
      user && router.replace('/home');
   }, [user]);

   const handleClick = () => {
      loginWithGitHub().catch((err: Error) => setError(err));
   };

   const hola = () => {
      router.replace('/home');
   };

   return (
      <Fragment>
         <Layout title="Devtter: A social network for developers">
            <section className="content">
               <figure>
                  <Logo
                     fill={colors.Lightblack}
                     stroke={colors.white}
                     width="120"
                     height="120"
                  />
               </figure>
               <h1>Devtter</h1>
               <h2>Talk about development with developers</h2>
               {loading && <Spinner />}
               {user === USER_STATES.NOT_LOGGED && (
                  <Button onClick={handleClick}>
                     <GitHub width={16} height={16} fill="white" />
                     Login with GitHub
                  </Button>
               )}
               {error && (
                  <div className="error">
                     {error.name}: {error.message}
                  </div>
               )}
               <button onClick={hola}>Entrar</button>
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
               background-color: ${colors.Lightblack};
            }

            figure {
               margin: -3rem 0 3rem 0;
               padding: 0;
               display: flex;
               justify-content: center;
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

            .error {
               border: 1px solid ${colors.darkGray};
               padding: 0.6rem;
               color: brown;
               margin-top: 1rem;
               text-align: center;
            }

            @media (min-width: ${breakpoints.mobileL}) {
               border-radius: 0.5rem;
            }
         `}</style>
      </Fragment>
   );
};

export default IndexPage;
