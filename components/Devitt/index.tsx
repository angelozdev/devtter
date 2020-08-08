import React, { Fragment } from 'react';

/* components */
import Avatar from 'components/Avatar';
import { colors } from 'styles/theme';

interface IProps {
   avatar: string;
   username: string;
   message: string;
   id: string;
   name: string;
}

const Devitt: React.FC<IProps> = ({
   avatar,
   username,
   message,
   name
}: IProps) => {
   return (
      <Fragment>
         <article>
            <Avatar src={avatar} alt={username} />
            <div className="devitt">
               <strong>{name}</strong>
               <span>@{username}</span>
               <p>{message}</p>
            </div>
         </article>
         <style jsx>{`
            article {
               padding: 0.6rem 1rem;
               display: flex;
               align-items: start;
               border-bottom: 1px solid ${colors.gray};
            }

            .devitt {
               margin-left: 0.6rem;
            }

            .devitt span {
               font-weight: 200;
               color: ${colors.gray};
               margin-left: 0.3rem;
            }

            .devitt p {
               margin: 0;
            }
         `}</style>
      </Fragment>
   );
};

export default Devitt;
