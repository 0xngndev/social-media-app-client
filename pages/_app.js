import NProgress from "nprogress";
import Layout from "../components/Layout";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";

import "../components/styles/nprogress.css";
import client from "../lib/apollo";

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
