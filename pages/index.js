import Head from "next/head";
import Login from "../components/Login/index";
export default function Home() {
  return (
    <>
      <Head>
        <title>My app nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}
