import React, { Fragment } from 'react';
import IDevitt from 'interfaces/devitt';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* components */
import Avatar from 'components/Avatar';

/* Styles */
import { animations, colors } from 'style/theme';

/* Hooks */
import useTimeago from 'hooks/useTimeago';

const Devitt = ({
   avatar,
   username,
   message,
   name,
   createAt,
   img,
   id
}: IDevitt): JSX.Element => {
   const timeago = useTimeago(createAt || 900000);
   const router = useRouter();

   const handleArticleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      router.push('/status/[id]', `/status/${id}`);
   };

   return (
      <Fragment>
         <article className="devitt-container" onClick={handleArticleClick}>
            <Avatar src={avatar} alt={username || 'username'} />
            <div className="devitt">
               <strong>{name}</strong>
               <span className="username">@{username}</span>
               <p>{message}</p>
               {img && (
                  <a href="#">
                     <figure>
                        <img src={img} alt="image" />
                     </figure>
                  </a>
               )}
               <Link href={`/status/[id]`} as={`/status/${id}`}>
                  <a className="devitt__time">
                     <time className="timeago">{timeago}</time>
                  </a>
               </Link>
            </div>
         </article>
         <style jsx>{`
            .devitt-container {
               padding: 0.6rem 1rem;
               display: flex;
               align-items: start;
               border-bottom: 1px solid ${colors.darkGray};
               transition: all ${animations.transition};
            }

            .devitt-container:hover {
               background-color: ${colors.darkGray};
               cursor: pointer;
            }

            .devitt {
               margin-left: 0.6rem;
            }
            .devitt__time:hover time {
               text-decoration: underline;
            }

            .devitt .username {
               margin-left: 0.3rem;
            }

            .devitt span,
            time {
               display: inline-block;
               font-weight: 200;
               color: ${colors.gray};
               margin-left: auto;
            }

            .devitt .timeago {
               margin-top: 0.5rem;
            }

            .devitt p {
               margin: 0;
            }

            a figure {
               margin: 1rem 0 0 0;
               padding: 56.25% 0 0 0;
               width: 100%;
               height: 0;
               position: relative;
            }

            a figure img {
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

            a figure button {
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
      </Fragment>
   );
};

export default Devitt;
