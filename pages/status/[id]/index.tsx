import React from 'react';
import Devitt from 'components/Devitt';
import IDevitt from 'interfaces/devitt';
import { NextPage, GetServerSideProps } from 'next';

/* Components */
import { BottomBar, Header } from 'components';
import { colors } from 'style/theme';

const DevittPage: NextPage<IDevitt> = ({
   avatar,
   username,
   message,
   name,
   createAt,
   id,
   img
}: IDevitt) => {
   const el = React.useRef<null | HTMLElement>(null);

   return (
      <section className="container" ref={el}>
         <Header element={el} />
         <div className="content">
            <Devitt
               avatar={avatar}
               username={username}
               message={message}
               name={name}
               createAt={createAt}
               id={id}
               img={img}
            />
         </div>

         <BottomBar element={el} />
         <style jsx>{`
            .container {
               width: 100%;
               height: 100%;
               max-width: 425px;
               min-height: calc(90vh - 49px - 49px);
               padding-top: 0;
               padding-bottom: 0;
               color: ${colors.white};
               background-color: ${colors.Lightblack};
               overflow-y: scroll;
               scroll-behavior: smooth;
            }

            .content {
               min-height: calc(100% - 49px - 49px);
            }
         `}</style>
      </section>
   );
};

export const getServerSideProps: GetServerSideProps = async ({
   params,
   res
}) => {
   const { id } = params as { id: string };
   const response = await fetch(`http://localhost:3000/api/devits/${id}`);
   if (response.ok) {
      const props = await response.json();
      return { props };
   }
   res?.writeHead(404, { Location: '/home' }).end();
   return { props: null };
};

export default DevittPage;
