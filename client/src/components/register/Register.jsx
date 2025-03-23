import { useState } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import "../login/Login.css"; // Reusing same styles
import SubHeader from "../subheader/SubHeader";
import { Link } from "react-router";

const { Title, Paragraph } = Typography;

export default function Register() {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Registration successful!");
    }, 1500);
  };

  return (
    <>
      <SubHeader subtitle="Home" title="Register" />

      <div className="login-container">
        <Card className="login-card">
          <div className="login-header">
          </div>

          <Form
            name="register"
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

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
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
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <div className="login-message">
          <Card className="promo-card" bordered={true}>
            <div className="promo-content">
              <Title level={2}>Join the Garden Community 🌿</Title>
              <Paragraph>
                Start designing and growing your virtual garden today. Track your progress, join community events, and customize your space!
              </Paragraph>
              <ul className="features-list">
                <li>🌸 Personalized Garden Layouts</li>
                <li>🌿 Plant Care Reminders</li>
                <li>🌞 Exclusive Community Challenges</li>
              </ul>

              <h5 className="login-redirect"><Link to='/login'>Already have a profile? Login...</Link></h5>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
