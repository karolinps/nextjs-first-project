import { useRouter } from "next/router";
import { useEffect } from "react";
import Users from "../../components/Users/index";
import { removeUserSession, getToken } from "../../services/auth";
import Head from "next/head";

const ListUsers = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.push("/login");
    }
  }, []);
  if (getToken()) {
    return (
      <div style={{ position: "relative" }}>
        <Head>
          <title>Usuarios</title>
        </Head>
        <button
          style={{ position: "absolute", right: 0, top: 15 }}
          onClick={(e) => {
            e.preventDefault();
            removeUserSession();
            router.push("/login");
          }}
        >
          Logout
        </button>
        <Users title="Usuarios" data={props.users} />
      </div>
    );
  } else {
    return <p>Redirecting...</p>;
  }
};

ListUsers.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    users,
  };
};

export default ListUsers;
