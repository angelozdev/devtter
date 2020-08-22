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
}

const Devitt: React.FC<IProps> = ({
   avatar,
   username,
   message,
   name,
   createAt
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
         `}</style>
      </Fragment>
   );
};

export default Devitt;
