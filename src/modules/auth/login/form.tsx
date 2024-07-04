import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import type { FormProps } from "antd";

type LoginFormType = {
  handleLogin: () => void;
};

type FieldType = {
  username?: string;
  password?: string;
};

export default function LoginForm({
  handleLogin,
}: LoginFormType): React.JSX.Element {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={{ width: 300 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
