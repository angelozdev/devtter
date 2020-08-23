import React, { Fragment } from 'react';

/* components */
import Avatar from 'components/Avatar';
import { colors } from 'styles/theme';
import useTimeago from 'hooks/useTimeago';

interface IProps {
   avatar: string;
   username: string;
   message: string;
   id: string;
   name: string;
   createAt: number;
   img: string | null;
}

const Devitt: React.FC<IProps> = ({
   avatar,
   username,
   message,
   name,
   createAt,
   img
}: IProps) => {
   const timeago = useTimeago(createAt);

   return (
      <Fragment>
         <article>
            <Avatar src={avatar} alt={username} />
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
               <span className="timeago">{timeago}</span>
            </div>
         </article>
         <style jsx>{`
            article {
               padding: 0.6rem 1rem;
               display: flex;
               align-items: start;
               border-bottom: 1px solid ${colors.darkGray};
            }

            .devitt {
               margin-left: 0.6rem;
            }

            .devitt .username {
               margin-left: 0.3rem;
            }

            .devitt span {
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
