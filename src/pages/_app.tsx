import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import CareerPage from '../component/CareerPage';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
       <CareerPage/>
      </MantineProvider>
    </>
  );
}