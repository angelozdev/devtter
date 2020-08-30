import React, { Fragment } from 'react';

/* Styles */
import { colors } from 'style/theme';

interface IProps {
   src: string | undefined;
   alt: string;
   width?: string;
   username?: string;
   borderColor?: string;
}

const Avatar: React.FC<IProps> = ({
   src,
   alt,
   width = '49px',
   username,
   borderColor = colors.gray
}: IProps): JSX.Element => {
   return (
      <Fragment>
         <figure>
            <img src={src} alt={alt} title={alt} />
            {username && <span>{username}</span>}
         </figure>
         <style jsx>{`
            figure {
               display: flex;
               align-items: center;
               margin: 0;
               padding: 0;
            }

            img {
               width: ${width};
               height: ${width};
               background-color: ${colors.darkGray};
               border-radius: 50%;
               padding: 1px;
               border: 1px solid ${borderColor};
            }

            img + span {
               margin-left: 1rem;
            }
         `}</style>
      </Fragment>
   );
};

export default Avatar;
