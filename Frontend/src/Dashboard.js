import React, { useState } from "react";
import { Layout, Menu, } from "antd";

import {ProfileButton} from "./components/profile"
import {
  UserOutlined,
  FormOutlined,
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
const menuItemFoldStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 0, // Set font size to 0 to make text invisible
};
const menuItemUnFoldStyle = {
  // Adjusted to match the width of the Sider in Dashboard.js
  padding: "0px 0px 0px 10px ",
};
const { Sider, Content, Header } = Layout;
const UnfoldNavbarWidth = 150;
const FoldNavbarWidth = 40;
const Dashboard = () => {
  const [fold, setFold] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState(UnfoldNavbarWidth);

  const changeFold = () => {
    setFold(!fold);
    fold ? setNavbarWidth(UnfoldNavbarWidth) : setNavbarWidth(FoldNavbarWidth);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
	  <Header
          style={{
            borderRadius: "10px 10px 0px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#c5c5c5",
			padding: "0px"
          }}
        >
          {/* Logo Area */}
          <div style={{ marginRight: "auto" }}>
            <img
              src="https://i.imgur.com/MgnwjM9.png"
              alt="Logo"
              style={{ marginTop:"25px" ,height: "68px", width: "auto" }}
            />
          </div>

          {/* Menu */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />

          {/* Profile Area */}
          <ProfileButton imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Header>

        <Layout>
          <Sider
            style={{ borderRight: "1px solid #cfcfcf" ,borderLeft: "1px solid #cfcfcf",borderBottom: "1px solid #cfcfcf"  }}
            width={navbarWidth}
            theme="light"
          >
            <Menu
              mode="vertical"
              theme="light"
              defaultSelectedKeys={["1"]}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="1"
                icon={<UserOutlined />}
              >
                <Link to="/profile">Profile</Link>
              </Menu.Item>
			  <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="2"
                icon={<HomeOutlined />}
              >
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="3"
                icon={<FormOutlined />}
              >
                <Link to="/forms">Forms</Link>
              </Menu.Item>
              <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="4"
                icon={<LoginOutlined />}
              >
                <Link to="/login">Sign In</Link>
              </Menu.Item>
              <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="5"
                icon={<LogoutOutlined />}
              >
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
              <Menu.Item
                style={fold ? menuItemFoldStyle : menuItemUnFoldStyle}
                key="6"
                icon={<SettingOutlined />}
              >
                <Link to="/settings">Settings</Link>
              </Menu.Item>
              <Menu.Item
                onClick={changeFold}
                key="7"
                icon={<MenuFoldOutlined />}
                style={{
                  marginTop: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                borderRight: "1px solid #cfcfcf"
              }}
            >
              <div>
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
