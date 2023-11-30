import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { ProfileButtonArea } from "./components/TopRightProfile";
import { UserOutlined, FormOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import "../src/assets/styles/dashboard.css";

const menuItemFoldStyle = {
	display: "flex",
	alignItems: "center",
	padding: "0px 0px 0px 10px ",
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

	const handleMouseEnter = () => {
		setFold(false);
		setNavbarWidth(UnfoldNavbarWidth);
	};

	const handleMouseLeave = () => {
		setFold(true);
		setNavbarWidth(FoldNavbarWidth);
	};
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Header
					className="header"
					style={{
						borderRadius: "3px 3px 0px 0px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: "#c5c5c5",
						padding: "0px",
					}}
				>
					{/* Logo Area */}
					<div style={{ marginRight: "auto" }}>
						<img src="https://i.imgur.com/MgnwjM9.png" alt="Logo" style={{ marginTop: "25px", height: "68px", width: "auto" }} />
					</div>

					{/* Menu */}
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />

					{/* Profile Area */}
					<ProfileButtonArea userName="John Doe" imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</Header>

				<Layout>
					<Sider style={{ boxShadow: "-5px 0px 10px rgba(0, 0, 0, 0.2)", borderRight: "1px solid #cfcfcf", borderLeft: "1px solid #cfcfcf", borderBottom: "1px solid #cfcfcf" }} width={navbarWidth} theme="light " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<Menu
							mode="vertical"
							theme="light"
							defaultSelectedKeys={["1"]}
							style={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
							}}
						>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="1" icon={<UserOutlined />}>
								<Link to="/profile">Profile</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="2" icon={<HomeOutlined />}>
								<Link to="/home">Home</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="3" icon={<FormOutlined />}>
								<Link to="/forms">Forms</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="4" icon={<LoginOutlined />}>
								<Link to="/login">Sign In</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="5" icon={<LogoutOutlined />}>
								<Link to="/signup">Sign Up</Link>
							</Menu.Item>
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="6" icon={<SettingOutlined />}>
								<Link to="/settings">Settings</Link>
							</Menu.Item>
							{/* <Menu.Item
								onClick={changeFold}
								key="7"
								icon={<MenuFoldOutlined />}
								style={{
								}}
							></Menu.Item> */}
						</Menu>
					</Sider>
					<Layout>
						<Content
							style={{
								display: "flex",
								flexDirection: "column",
								padding: "16px",
								borderRight: "1px solid #cfcfcf",
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
