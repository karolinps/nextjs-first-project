import Head from "next/head";
import Users from "../components/Users/index";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>My app nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users title="Usuarios" data={props.users} />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
