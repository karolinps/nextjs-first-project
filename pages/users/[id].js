import styles from "../users/users.module.css";
import { PageHeader, Col, Row, Avatar } from "antd";
import Router from "next/router";
import Head from "next/head";
import { getToken } from "../../services/auth";
import { useEffect } from "react";

const DetailUser = ({ user }) => {
  useEffect(() => {
    if (!getToken()) {
      Router.push("/login");
    }
  }, []);
  if (getToken()) {
    return (
      <>
        <Head>
          <title>Detalle usuario</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.container}>
          <PageHeader
            className={styles.sitePageHeader}
            onBack={() => Router.push("/users")}
            title="Atrás"
            subTitle={`Detalle Usuario ${user.id}`}
          />
          <Row className={styles.card}>
            <Col sm={18} md={20}>
              <h1>{user.name}</h1>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Tel: {user.phone}</p>
              <p>City: {user.address.city}</p>
              <p>Company: {user.company.name}</p>
            </Col>
            <Col sm={6} md={4}>
              <Avatar
                size={80}
                style={{ backgroundColor: "rgb(208, 104, 104)" }}
              >
                {user.name.charAt(0)}
              </Avatar>
            </Col>
          </Row>
        </section>
      </>
    );
  } else {
    return <p>Redirecting...</p>;
  }
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
