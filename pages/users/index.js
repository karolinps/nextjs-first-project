import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import Users from "../../components/Users/index";
import consts from "../../consts";

const ListUsers = (props) => {
  const router = useRouter();
  const { hasReadPermission, users } = props;

  useEffect(() => {
    if (!hasReadPermission) {
      router.push("/login");
    }
  }, []);
  if (hasReadPermission) {
    return (
      <>
        <button
          onClick={(e) => {
            e.preventDefault();
            const cookies = new Cookies();
            cookies.remove(consts.password, { path: "/" });
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
        <Users title="Usuarios" data={users} />
      </>
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
