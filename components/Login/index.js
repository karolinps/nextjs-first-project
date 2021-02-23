import { useState } from "react";
import { useRouter } from "next/router";

import Cookies from "universal-cookie";
import { Form, Input, Button } from "antd";

import consts from "../../consts";
import styles from "../Login/Login.module.css";

export default function Login({ redirectPath }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <Form className={styles.form}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={(e) => {
            e.preventDefault();
            const cookies = new Cookies();
            cookies.set(consts.password, password, {
              path: "/",
            });
            window.location.href = "/users";
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
