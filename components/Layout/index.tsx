import React, { Fragment } from 'react';
import Head from 'next/head';

/* Styles */
import styles, { globalStyles } from './styles';

type Props = {
   children?: React.ReactNode;
   title?: string;
};

const Layout = ({
   children,
   title = 'Devtter / Your social network if you are developer'
}: Props): JSX.Element => (
   <Fragment>
      <Head>
         <title>{title}</title>
         <meta charSet="utf-8" />
         <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
         />
      </Head>

      <main>{children}</main>

      <style jsx>{styles}</style>
      <style jsx global>
         {globalStyles}
      </style>
   </Fragment>
);

export default Layout;
