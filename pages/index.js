import { register } from "../api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { message } from "antd";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const registerUser = () => {
  const router = useRouter();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginRedirect = () => {
    router.replace(`./login`);
  };

  //handling the form data and getting a token with user
  const handlSubmit = () => {
    setIsLoading(true);
    register({ username, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        if (typeof result.err == "string") {
          console.log(result);
          message.error(result.err, 6);
        } else {
          Object.keys(result.err).forEach((key) => {
            message.error(result.err[key], 6);
          });
          setIsLoading(false);
        }
      } else {
        localStorage.setItem("user_token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setIsLoading(false);
        router.replace("./home");
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user_token") && localStorage.getItem("user")) {
      router.replace(`./home`);
    }
  }, []);

  return (
    <div className="main-form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          type="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Enter a username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Button
          onClick={handlSubmit}
          type="primary"
          htmlType="submit"
          loading={isLoading}
          className="login-form-button"
        >
          Register
        </Button>
        <div className="orlogin">
          <p>Or log in if you have an account</p>
          <Button
            onClick={loginRedirect}
            type="primary"
            className="login-form-button"
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default registerUser;
