import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/Store";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
          <title>The Meraki Corner</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
