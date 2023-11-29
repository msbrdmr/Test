import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, FormOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
const menuItemFoldStyle = {
	// Adjusted to match the width of the Sider in Dashboard.js
	padding: "16px",
};
const menuItemUnFoldStyle = {
	// Adjusted to match the width of the Sider in Dashboard.js
	padding: "16px",
};
const { Sider, Content, Header } = Layout;
const UnfoldNavbarWidth = 150;
const FoldNavbarWidth = 80;
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
				<Header style={{ display: "flex", alignItems: "center"}}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
				</Header>

				<Layout>
					<Sider width={navbarWidth} theme="light">
						<Menu mode="vertical" theme="light" defaultSelectedKeys={["1"]} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="1" icon={<UserOutlined />}>
								<Link to="/profile">Profile</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="2" icon={<FormOutlined />}>
								<Link to="/forms">Forms</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="3" icon={<LoginOutlined />}>
								<Link to="/signin">Sign In</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="4" icon={<LogoutOutlined />}>
								<Link to="/signup">Sign Up</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="5" icon={<SettingOutlined />}>
								<Link to="/settings">Settings</Link>
							</Menu.Item>
							<Menu.Item onClick={changeFold} key="6" icon={<MenuFoldOutlined />} style={{ marginTop: "auto", marginBottom: "20px" }}></Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Content style={{ display: "flex", flexDirection: "column", padding: "16px", border: "1px solid red" }}>
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
