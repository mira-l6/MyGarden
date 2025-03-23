import { useState } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import "./Login.css";
import SubHeader from "../subheader/SubHeader";
import { Link } from "react-router";

const { Title, Paragraph } = Typography;

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Login successful!");
    }, 1500);
  };

  return (
    <>
      <SubHeader subtitle="Home" title="Login" />

      <div className="login-container" id="main-section">
        <Card className="login-card">
          <div className="login-header">
          </div>

          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            className="login-form"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className="login-input" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password className="login-input" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="login-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <div className="login-message">
        <Card className="promo-card" bordered={true}>
          <div className="promo-content">
            <Title level={2}>Grow Your Virtual Garden 🌱</Title>
            <Paragraph>
              Create, design, and cultivate your dream garden online. Track your plants, customize layouts, and share with friends.
            </Paragraph>
            <ul className="features-list">
              <li>🌸 Customizable Garden Layouts</li>
              <li>🌿 Real-time Plant Tracking</li>
              <li>🌞 Community Sharing & Challenges</li>
            </ul>

            <h5 className="register-redirect"><Link to='/register'>Do not have a profile? Register...</Link></h5>
          </div>
        </Card>
        </div>
      </div>
    </>
  );
};

