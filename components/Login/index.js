import { useState } from "react";
import { useRouter } from "next/router";

import { Form, Input, Button, message } from "antd";

import styles from "../Login/Login.module.css";

import api from "../../api";
import { setUserSession } from "../../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    api.auth
      .login(email, password)
      .then((res) => {
        setUserSession(res.data.token, res.data.data);
        message.success(res.data.message);
        setTimeout(() => {
          router.push("/users");
        }, 2000);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          message.error(err.response.data.message);
        } else {
          message.error("Ha ocurrido, intente de nuevo");
        }
      });
  };
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
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
