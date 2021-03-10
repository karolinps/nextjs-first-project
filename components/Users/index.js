import { useState } from "react";
import Router from "next/router";

import styles from "../Users/Users.module.css";

export default function List(props) {
  const [users, setUsers] = useState(props.data);

  const deleteItem = (id) => {
    const items = users.filter((el) => el.id != id);
    setUsers(items);
  };
  return (
    <>
      <h1 style={{ color: "#FFF", margin: "auto 15px" }}>{props.title}</h1>
      <section className={styles.container}>
        <div className={styles.grid}>
          {users.map((el) => {
            return (
              <div className={styles.card} key={el.id}>
                <div className={styles.cardBody}>
                  <h2>
                    {el.id}. {el.name}
                  </h2>
                  <p>Email: {el.email}</p>
                  <p>Tel: {el.phone}</p>
                  <p>City: {el.address.city}</p>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    onClick={() =>
                      Router.push(`/users/[id]`, `/users/${el.id}`)
                    }
                  >
                    Ver
                  </button>
                  <button
                    style={{ background: "red" }}
                    onClick={() => deleteItem(el.id)}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
