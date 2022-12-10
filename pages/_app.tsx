import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}