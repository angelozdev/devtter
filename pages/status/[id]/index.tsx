import Devitt from 'components/Devitt';
import IDevitt from 'interfaces/devitt';
import { NextPage, GetServerSideProps } from 'next';
import React, { Fragment } from 'react';

const DevittPage: NextPage<IDevitt> = ({
   avatar,
   username,
   message,
   name,
   createAt,
   id,
   img
}: IDevitt) => {
   return (
      <Fragment>
         <Devitt
            avatar={avatar}
            username={username}
            message={message}
            name={name}
            createAt={createAt}
            id={id}
            img={img}
         />
         <style jsx>{``}</style>
      </Fragment>
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
