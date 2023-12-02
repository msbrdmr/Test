import React, { useState } from "react";
import { Layout, Typography, Avatar, Divider, Descriptions, Button, Form, Input, Upload, message } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import * as yup from "yup";

const { Content } = Layout;
const { Title } = Typography;

const validationSchema = yup.object().shape({
    currentPassword: yup.string().required("Please enter your current password"),
    newPassword: yup
        .string()
        .required("Please enter your new password")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Passwords must match")
        .required("Please confirm your new password"),
});

export const Profile = () => {
    const [profileImage, setProfileImage] = useState(
        "https://lh3.googleusercontent.com/ogw/AKPQZvyuU4OlHH8kMaRx86EmmADarFQenIavEjCXjROLHwI=s32-c-mo"
    );
    const onFinish = (values) => {
        // Handle form submission (e.g., update password)
        console.log("Received values:", values);
    };
    const handleChangeProfileImage = (info) => {
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
            setProfileImage(info.file.response.url); // Assuming the server returns the image URL after upload
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    };
    return (
        <div style={{ padding: "5px" }}>
            <Title level={2}>User Profile</Title>
            <Divider />

            <Upload
                name="profileImage"
                action="/api/upload-profile-image" // Replace with your upload endpoint, save the uploaded file here
                showUploadList={false}
                onChange={handleChangeProfileImage}
            >
                <Avatar size={128} src={profileImage} icon={<UserOutlined />} />
                <Button icon={<UploadOutlined />} style={{ margin: "18px" }}>
                    Change Profile Image
                </Button>
            </Upload>

            <Descriptions bordered style={{ marginTop: "20px" }}>
                <Descriptions.Item label="Full Name">John Doe</Descriptions.Item>
                <Descriptions.Item label="Username">john.doe</Descriptions.Item>
                <Descriptions.Item label="Email">john.doe@example.com</Descriptions.Item>
            </Descriptions>

            <Divider />

            <Title level={3}>Edit Password</Title>
            <Form name="editPassword" onFinish={onFinish} layout="vertical" initialValues={{}}>
                <Form.Item
                    name="currentPassword"
                    label="Current Password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your current password",
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter current password" />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your new password",
                        },
                        {
                            min: 6,
                            message: "Password must be at least 6 characters",
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter new password" />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={["newPassword"]}
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your new password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("newPassword") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("The two passwords do not match"));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm new password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Password
                    </Button>
                </Form.Item>
            </Form>

            <Divider />

            {/* Add similar sections for editing username and changing email */}
            {/* Example: Edit Username */}
            <Title level={3}>Edit Username</Title>
            <Form name="editUsername" onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="newUsername"
                    label="New Username"
                    rules={[{ required: true, message: "Please enter your new username" }]}
                >
                    <Input placeholder="Enter new username" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Username
                    </Button>
                </Form.Item>
            </Form>

            <Divider />

            {/* Example: Change Email */}
            <Title level={3}>Change Email</Title>
            <Form name="changeEmail" onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="newEmail"
                    label="New Email"
                    rules={[{ required: true, message: "Please enter your new email" }]}
                >
                    <Input placeholder="Enter new email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Change Email
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

