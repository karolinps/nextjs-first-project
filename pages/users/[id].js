import styles from "../users/users.module.css";

const DetailUser = ({ user }) => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Tel: {user.phone}</p>
        <p>City: {user.address.city}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </section>
  );
};

DetailUser.getInitialProps = async (param) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${param.query.id}`
  );
  const user = await resp.json();

  return {
    user,
  };
};

export default DetailUser;
