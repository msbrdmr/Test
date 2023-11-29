// ProfileButton.js
import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const ProfileButton = ({ imageUrl }) => {
    return (
        <div style={{  display: "flex", alignItems: "center", height: "50px", padding: "10px", gap: "5px" }}>

            <Button type="default" icon={<UserOutlined />}>
                Profile
            </Button>
            <img
                src={imageUrl}
                alt="Profile"
                style={{ borderRadius: "50%", height: "50px", width: "50px", border:"2px solid white"}}
            />


        </div>
    );
};