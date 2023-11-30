import React, { useState } from "react";
import { Button, Avatar, notification, App } from "antd";
import { SettingTwoTone, UserOutlined, MessageTwoTone, MailTwoTone, SnippetsTwoTone, EditOutlined } from "@ant-design/icons";
import "../assets/styles/profile.css";
export const ProfileButtonArea = ({ imageUrl, userName }) => {
    const { modal } = App.useApp();
    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleUnhover = () => {
        setHovered(false);
    };
    const handleEditClick = () => {
        // Display Ant Design notification
        notification.info({
            message: 'Good',
            description: 'Hey',
            placement: 'bottomLeft',
        });
    };


    return (
        <div className="profile">

            <Button
                type="default"
                icon={<MessageTwoTone />}
                style={{ borderRadius: "25px" }}
            >
            </Button>
            <Button
                type="default"
                icon={<SnippetsTwoTone />}
                style={{ borderRadius: "25px" }}
            >
            </Button>
            <Button
                type="default"
                icon={<MailTwoTone />}
                style={{ borderRadius: "25px" }}
            >
            </Button>
            <Button
                type="default"
                icon={<SettingTwoTone />}
                style={{ borderRadius: "25px" }}
            >
            </Button>

            <Button
                type="default"
                style={{ borderRadius: "25px 0px 0px 25px" }}
            >
                {userName}
            </Button>
            <img
                className="profile-image"
                src={imageUrl}
                alt="Profile"
                style={{
                    borderRadius: "50%",
                    transition: "0.05s",
                    height: "50px",
                    width: "50px",
                    border: isHovered ? "3px solid rgba(0, 0, 0, 0.3)" : "1px solid white", // Add outline with less alpha on hover
                    position: "relative",
                    cursor: "pointer", // Change cursor to hand
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                onClick={handleEditClick}
            />
        </div>
    );
};
