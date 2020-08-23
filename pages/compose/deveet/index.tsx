import React, { useState, DragEvent, useEffect } from 'react';
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
import { addDeveet, uploadImage } from 'firebase/client';
import { useRouter } from 'next/router';
import { storage } from 'firebase';

type Event = React.ChangeEvent<HTMLTextAreaElement>;
type DragEventArea = DragEvent<HTMLTextAreaElement>;

enum DRAG_STATE {
   NONE,
   ERROR,
   OVER
}

const Deveet: React.FC = (): JSX.Element => {
   const { user, loading } = useUser();
   const [message, setMessage] = useState('');
   const [loadingSendDeveet, setLoadingSendDeveet] = useState(false);
   const router = useRouter();
   const [drag, setDrag] = useState(DRAG_STATE.NONE);
   const [imgURL, setImgURL] = useState<string | null>(null);
   const [task, setTask] = useState<storage.UploadTask | null>(null);

   const handleChange = (e: Event) => {
      const { value } = e.target;
      setMessage(value);
   };

   const handleDragEnter = (e: DragEventArea): void => {
      e.preventDefault();
      setDrag(DRAG_STATE.OVER);
   };
   const handleDragLeave = (e: DragEventArea): void => {
      e.preventDefault();
      setDrag(DRAG_STATE.NONE);
   };
   const handleDrop = (e: DragEventArea): void => {
      e.preventDefault();
      setDrag(DRAG_STATE.NONE);
      const file = e.dataTransfer.files[0];

      const task = uploadImage(file);
      setTask(task);
   };

   useEffect(() => {
      if (task) {
         task.on('state_changed', () => {
            task.snapshot.ref.getDownloadURL().then((url) => setImgURL(url));
         });
      }
   }, [task]);

   const handleClick = () => {
      setLoadingSendDeveet(true);
      if (!user) return;
      addDeveet({
         avatar: user?.avatar,
         username: user?.username,
         message,
         name: user?.name,
         img: imgURL
      })
         .then(() => {
            router.push('/home');
         })
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
               <div className="container-avatar">
                  <Avatar src={user?.avatar} alt={`avatar ${user?.name}`} />
               </div>
               <div className="container-devitt">
                  <textarea
                     onDragEnter={handleDragEnter}
                     onDragLeave={handleDragLeave}
                     onDrop={handleDrop}
                     placeholder="¿Qué está pasando?"
                     name="deveet"
                     id="deveet"
                     maxLength={280}
                     value={message}
                     onChange={handleChange}
                  />
                  {imgURL && (
                     <figure className="image-upload">
                        <button onClick={() => setImgURL(null)}>x</button>
                        <img src={imgURL} alt="image uploading" />
                     </figure>
                  )}
               </div>
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

            section .container-avatar {
               margin-right: 0.6rem;
            }

            section .container-devitt {
               width: 100%;
            }

            section textarea {
               padding: 0.5rem;
               border-radius: 0.5rem;
               width: 100%;
               height: 150px;
               outline: none;
               background-color: transparent;
               color: ${colors.white};
               font-size: 1.2rem;
               border: none;
               resize: none;
               border-bottom: 1px solid ${colors.darkGray};
               border: 1px dashed
                  ${drag === DRAG_STATE.OVER ? colors.primary : 'transparent'};
            }

            section textarea::-webkit-input-placeholder {
               color: ${colors.gray};
            }

            section textarea:focus::-webkit-input-placeholder {
               color: ${colors.white};
            }

            figure {
               margin: 1rem 0 0 0;
               padding: 56.25% 0 0 0;
               width: 100%;
               height: 0;
               position: relative;
            }

            figure img {
               width: 100%;
               height: 100%;
               position: absolute;
               top: 0;
               bottom: 0;
               left: 0;
               right: 0;
               object-fit: cover;
               border-radius: 0.5rem;
            }

            figure button {
               width: 30px;
               height: 30px;
               position: absolute;
               top: 0.5rem;
               left: 0.5rem;
               z-index: 1;
               border-radius: 50%;
               border: none;
               outline: none;
               background-color: ${colors.black}aa;
               color: ${colors.white};
               line-height: 20px;
            }
         `}</style>
      </Layout>
   );
};

export default Deveet;
