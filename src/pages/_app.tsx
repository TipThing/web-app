import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, MantineProvider } from '@mantine/core';
import ColorSchemeContext from './components/style/colorScheme/ColorSchemeContext';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('light' as ColorScheme);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeContext.Provider
        value={{ colorScheme, onChange: setColorScheme }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeContext.Provider>
    </>
  );
}
