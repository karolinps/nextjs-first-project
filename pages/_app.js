import App from "next/app";
import Cookies from "universal-cookie";

import "../styles/globals.css";
import "../styles/main.less";

import Layout from "../components/Layout/index";
import consts from "../consts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.password) ?? "";

  if (password === "123456") {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;
