import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, notification, Popover, Menu, Dropdown } from "antd";
import {
  SettingTwoTone,
  MessageTwoTone,
  MailTwoTone,
  SnippetsTwoTone,
  MenuOutlined,
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  const handleProfileButtonClick = () => {
    navigate("/profile");
  };

  const handleEditClick = () => {
    // Display Ant Design notification
    notification.info({
      message: "Good",
      description: "Hey",
      placement: "bottomLeft",
    });
  };

  const handleMenuClick = (type) => {
    notification.info({
      message: "Menu Clicked",
      description: contentMap[type],
      placement: "bottomLeft",
    });
  };

  const renderPopoverContent = (type) => (
    <div>
      <p>{contentMap[type]}</p>
    </div>
  );

  const handleMenuIconClick = () => {
    setHovered(!isHovered);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    //this has ran once when the comp has loaded(topright profile),event listener is added to window,
    //it runs the handleResize, and that function is setting the state  [isMobile ] based on (window.innerWidth < 768)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menu = (
    <Menu >
      <Menu.Item key="message" onClick={() => handleMenuClick("message")}>
        <MessageTwoTone style={{marginRight:"8px"}}/>
        Message
      </Menu.Item>
      <Menu.Item key="snippets" onClick={() => handleMenuClick("snippets")}>
        <SnippetsTwoTone style={{marginRight:"8px"}}/>
        Snippets
      </Menu.Item>
      <Menu.Item key="mail" onClick={() => handleMenuClick("mail")}>
        <MailTwoTone style={{marginRight:"8px"}}/>
        Mail
      </Menu.Item>
      <Menu.Item key="setting" onClick={() => handleMenuClick("setting")}>
        <SettingTwoTone style={{marginRight:"8px"}}/>
        Settings
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="profile">
      {isMobile ? (
        // Display menu icon and dropdown for mobile
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            icon={<MenuOutlined />}
            type="default"
            style={{ borderRadius: "25px",margin:"5px" }}
          />
        </Dropdown>
      ) : (
        // Display individual buttons for larger screens
        <>
          <Popover content={renderPopoverContent("message")} trigger="hover">
            <Button
              className="utility-button"
              type="default"
              icon={<MessageTwoTone />}
              style={{ borderRadius: "25px" }}
              onClick={() => navigate("/chat")}
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
        </>
      )}

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
