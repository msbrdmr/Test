import React, { useState } from "react";
import { Layout, Menu, Divider, Switch } from "antd";

import { ProfileButtonArea } from "./components/TopRightProfile";
import { UserOutlined, FormOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import "../src/assets/styles/dashboard.css";
import CustomDivider from "./components/CustomDivider";
import SearchBar from "./components/SearchBar";

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
			<Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
				<Header style={{ background: darkMode ? "#001529" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, 0.65)" }}>
					<div style={{ marginRight: "auto" }}>
						<img src="https://i.imgur.com/MgnwjM9.png" alt="Logo" style={{ marginTop: "25px", height: "68px", width: "auto" }} />
					</div>
					<SearchBar></SearchBar>
					<CustomDivider type="vertical" margin={20} padding={20} />

					<Switch checked={darkMode} onChange={handleDarkModeChange} style={{ marginLeft: "10px", marginRight: "10px" }} />

					<ProfileButtonArea userName="musab erdemir" imageUrl="https://lh3.googleusercontent.com/ogw/AKPQZvyuU4OlHH8kMaRx86EmmADarFQenIavEjCXjROLHwI=s32-c-mo" srcset="https://lh3.googleusercontent.com/ogw/AKPQZvyuU4OlHH8kMaRx86EmmADarFQenIavEjCXjROLHwI=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AKPQZvyuU4OlHH8kMaRx86EmmADarFQenIavEjCXjROLHwI=s64-c-mo 2x " />
				</Header>

				<Layout>
					<Sider style={{ background: darkMode ? "#001529" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, 0.65)" }} width={navbarWidth} theme="light" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
							<CustomDivider type="horizontal" margin={20} padding={10} />
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="1" icon={<UserOutlined />}>
								<Link to="/profile">Profile</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />

							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="2" icon={<HomeOutlined />}>
								<Link to="/home">Home</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="3" icon={<FormOutlined />}>
								<Link to="/forms">Forms</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="4" icon={<LoginOutlined />}>
								<Link to="/login">Login</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="5" icon={<LogoutOutlined />}>
								<Link to="/signup">Sign Up</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={fold ? menuItemFoldStyle : menuItemUnFoldStyle} key="6" icon={<SettingOutlined />}>
								<Link to="/settings">Settings</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
						</Menu>
					</Sider>
					<Layout>
						<Content
							style={{
								marginLeft: fold ? FoldNavbarWidth : UnfoldNavbarWidth,
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
