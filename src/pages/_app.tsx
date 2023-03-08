import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, MantineProvider } from '@mantine/core';
import ColorSchemeContext from '../components/style/colorScheme/ColorSchemeContext';
import { useLocalStorage, useWindowEvent } from '@mantine/hooks';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'colorScheme',
    defaultValue: 'light' as ColorScheme,
  });

  useWindowEvent('keydown', (event) => {
    if (event.key === 'd' && (event.ctrlKey || event.metaKey)) {
      setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

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
