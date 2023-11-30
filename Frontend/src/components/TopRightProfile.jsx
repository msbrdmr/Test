import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, notification, Popover } from "antd";
import {
    SettingTwoTone,
    MessageTwoTone,
    MailTwoTone,
    SnippetsTwoTone,
} from "@ant-design/icons";
import "../assets/styles/profile.css";

const contentMap = {
    message: "Message Inbox",
    snippets: "Snippets Inbox",
    mail: "Mail Inbox",
    setting: "Settings",
};

export const ProfileButtonArea = ({ imageUrl, userName }) => {
    const navigate = useNavigate();
    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleUnhover = () => {
        setHovered(false);
    };
    const handleProfileButtonClick = (
    ) => {
        navigate("/profile")
    }
    const handleEditClick = () => {
        // Display Ant Design notification
        notification.info({
            message: "Good",
            description: "Hey",
            placement: "bottomLeft",
        });
    };



    const renderPopoverContent = (type) => (
        <div>
            <p>{contentMap[type]}</p>
        </div>
    );

    return (
        <div className="profile">
            <Popover content={renderPopoverContent("message")} trigger="hover">
                <Button
                    className="utility-button"
                    type="default"
                    icon={<MessageTwoTone />}
                    style={{ borderRadius: "25px" }}
                />
            </Popover>
            <Popover content={renderPopoverContent("snippets")} trigger="hover">
                <Button
                    className="utility-button"
                    type="default"
                    icon={<SnippetsTwoTone />}
                    style={{ borderRadius: "25px" }}
                />
            </Popover>
            <Popover content={renderPopoverContent("mail")} trigger="hover">
                <Button
                    className="utility-button"
                    type="default"
                    icon={<MailTwoTone />}
                    style={{ borderRadius: "25px" }}
                />
            </Popover>
            <Popover content={renderPopoverContent("setting")} trigger="hover">
                <Button
                    className="utility-button"
                    type="default"
                    icon={<SettingTwoTone />}
                    style={{ borderRadius: "25px" }}
                />
            </Popover>

            {/* Dark Mode Switch */}


            <Button
                onClick={handleProfileButtonClick}
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
                    border: isHovered
                        ? "3px solid rgba(0, 0, 0, 0.3)"
                        : "1px solid white", // Add outline with less alpha on hover
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
