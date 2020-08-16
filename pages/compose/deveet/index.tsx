import React, { useState } from 'react';
import Link from 'next/link';
import { colors } from 'styles/theme';

/* Components */
import Layout from 'components/Layout';
import ArrowLeft from 'components/Icons/ArrowLeft';
import Button from 'components/Button';
import Avatar from 'components/Avatar';

/* Hooks */
import useUser from 'hooks/useUser';
import Spinner from 'components/Spinner';
import { addDeveet } from 'firebase/client';
import { useRouter } from 'next/router';

type Event = React.ChangeEvent<HTMLTextAreaElement>;

const Deveet = () => {
   const { user, loading } = useUser();
   const [message, setMessage] = useState('');
   const [loadingSendDeveet, setLoadingSendDeveet] = useState(false);
   const router = useRouter();

   const handleChange = (e: Event) => {
      const { value } = e.target;
      setMessage(value);
   };

   const handleClick = () => {
      setLoadingSendDeveet(true);
      if (!user) return;
      addDeveet({
         avatar: user?.avatar,
         username: user?.username,
         message,
         name: user?.name
      })
         .then(() => {
            router.push('/home');
         })
         .catch(console.error)
         .finally(() => setLoadingSendDeveet(false));
   };

   return (
      <Layout title="Post a new Deveet / Devtter">
         {loading && <Spinner />}
         <div className="content">
            <header>
               <Link href="/home">
                  <a>
                     <ArrowLeft
                        width="37px"
                        height="37px"
                        stroke={colors.primary}
                     />
                  </a>
               </Link>
               <Button
                  onClick={handleClick}
                  disabled={message === '' || loadingSendDeveet}
                  bgColor={colors.primary}
               >
                  {loadingSendDeveet ? 'Loading...' : 'Deveeter'}
               </Button>
            </header>
            <section>
               <div>
                  <Avatar src={user?.avatar} alt={`avatar ${user?.name}`} />
               </div>
               <textarea
                  placeholder="¿Qué está pasando?"
                  name="deveet"
                  id="deveet"
                  maxLength={280}
                  value={message}
                  onChange={handleChange}
               />
            </section>
         </div>
         <style jsx>{`
            header {
               display: flex;
               align-items: center;
               justify-content: space-between;
               padding: 0 1rem;
               height: 49px;
               border-bottom: 1px solid ${colors.darkGray};
            }

            header a {
               height: 37px;
            }
            .content {
               width: 100%;
               height: 100%;
               min-height: calc(90vh - 49px - 49px);
               background-color: ${colors.Lightblack};
            }

            section {
               display: flex;
               padding: 1rem;
               color: ${colors.white};
            }

            section > div {
               margin-right: 0.6rem;
            }

            section textarea {
               width: 100%;
               height: 150px;
               outline: none;
               background-color: transparent;
               color: ${colors.white};
               font-size: 1.2rem;
               border: none;
               resize: none;
               border-bottom: 1px solid ${colors.darkGray};
            }

            section textarea::-webkit-input-placeholder {
               color: ${colors.gray};
            }

            section textarea:focus::-webkit-input-placeholder {
               color: ${colors.white};
            }
         `}</style>
      </Layout>
   );
};

export default Deveet;
