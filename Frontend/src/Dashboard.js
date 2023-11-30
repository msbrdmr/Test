import React, { useState } from "react";
import { Layout, Menu, Divider, Switch } from "antd";

import { ProfileButtonArea } from "./components/TopRightProfile";
import { UserOutlined, FormOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import "../src/assets/styles/dashboard.css";
import CustomDivider from "./components/CustomDivider";

const menuItemFoldStyle = {
	display: "flex",
	alignItems: "center",
	padding: "0px 0px 0px 10px ",
	justifyContent: "center",
	fontSize: 0,
};
const menuItemUnFoldStyle = {
	padding: "0px 0px 0px 10px ",
};
const { Sider, Content, Header } = Layout;
const UnfoldNavbarWidth = 150;
const FoldNavbarWidth = 40;
const Dashboard = ({ darkMode, handleDarkModeChange }) => {
	const [fold, setFold] = useState(true);
	const [navbarWidth, setNavbarWidth] = useState(FoldNavbarWidth);

	const handleMouseEnter = () => {
		setFold(false);
		setNavbarWidth(UnfoldNavbarWidth);
	};

	const handleMouseLeave = () => {
		setFold(true);
		setNavbarWidth(FoldNavbarWidth);
	};
	return (
		<div>
			<Layout style={{ minHeight: "80vh" }}>
				<Header style={{ background: darkMode ? "#001529" : "#FFF", color: darkMode ? "#FFF" : "#001529" }}>
					<div style={{ marginRight: "auto" }}>
						<img src="https://i.imgur.com/MgnwjM9.png" alt="Logo" style={{ marginTop: "25px", height: "68px", width: "auto" }} />
					</div>

					<CustomDivider height={50} topMargin={20} bottomMargin={20} />

					<Switch checked={darkMode} onChange={handleDarkModeChange} style={{ marginLeft: "10px", marginRight: "10px" }} />


					<ProfileButtonArea userName="John Doe" imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</Header>

				<Layout>
					<Sider  width={navbarWidth} theme="light" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<Menu
							mode="vertical"
							theme={darkMode ? "dark" : "light"}  
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
						</Menu>
					</Sider>
					<Layout>
						<Content
							style={{
								display: "flex",
								flexDirection: "column",
								padding: "30px",
							}}
						>
							<div>
								<Outlet />
							</div>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	);
};
export default Dashboard;
