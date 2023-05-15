import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const RegistrationPage = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f1f1f1',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
        <div
            style={{
                background: '#ffffff',
                padding: '100px',
                borderRadius: '8px',
                maxWidth: '800px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 1200,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 100,
                        span: 100,
                    }}
                    style={{ marginBottom: 0 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div >
    </div >
);
export default RegistrationPage;