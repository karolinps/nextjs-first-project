import "../styles/globals.css";
import "../styles/main.less";
import Layout from "../components/Layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
