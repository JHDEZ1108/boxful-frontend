import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/shared/Layout';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boxful Test</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

