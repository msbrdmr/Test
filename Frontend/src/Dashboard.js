import React, { useState } from "react";
import { Layout, Menu, Divider, Switch } from "antd";

import { ProfileButtonArea } from "./components/TopRightProfile";
import { UserOutlined, FormOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, MenuFoldOutlined, HomeOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../src/assets/styles/dashboard.css";
import CustomDivider from "./components/CustomDivider";
import SearchBar from "./components/SearchBar";

const menuItemFoldStyle = {
	transition: "0.2s",
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

const Dashboard = ({ darkMode, handleDarkModeChange, siderType, setSiderType }) => {
	const siderWidths = {
		max: 150,
		min: 40,
	};
	const navigator = useNavigate();
	const [isHover, setIsHover] = useState(false);
	// const [navbarWidth, setNavbarWidth] = useState(siderType === "dock" ? siderWidths.max : siderWidths.min);
	let navbarWidth = siderType === "dock" ? siderWidths.max : siderType === "hover" ? (isHover ? siderWidths.max : siderWidths.min) : siderWidths.min;
	console.log(siderType);

	const handleMouseEnter = () => {
		if (siderType !== "hover") return;
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		if (siderType !== "hover") return;
		setIsHover(false);
	};
	const menuIconStyle = {
		fontSize: "large",
	};

	const preventDragHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
				<Header style={{ background: darkMode ? "#001529" : "#fff", color: darkMode ? "#fff" : "rgba(0, 0, 0, 0.65)" }}>
					<img
						className="logo-header"
						src="https://i.imgur.com/TbRxiiR.png"
						alt="Logo"
						draggable="false" // Disable drag and drop
						onDragStart={preventDragHandler} // Prevent dragging
						onClick={() => {
							navigator("/home");
						}}
					/>
					{/* <SearchBar></SearchBar> */}
					<CustomDivider type="vertical" margin={20} padding={20} />

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
							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="1" icon={<UserOutlined style={menuIconStyle} />}>
								<Link to="/profile">Profile</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />

							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="2" icon={<HomeOutlined style={menuIconStyle} />}>
								<Link to="/home">Home</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="3" icon={<FormOutlined style={menuIconStyle} />}>
								<Link to="/forms">Forms</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="4" icon={<LoginOutlined style={menuIconStyle} />}>
								<Link to="/login">Login</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="5" icon={<LogoutOutlined style={menuIconStyle} />}>
								<Link to="/signup">Sign Up</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
							<Menu.Item style={navbarWidth === siderWidths.min ? menuItemFoldStyle : menuItemUnFoldStyle} key="6" icon={<SettingOutlined style={menuIconStyle} />}>
								<Link to="/settings">Settings</Link>
							</Menu.Item>
							<CustomDivider type="horizontal" margin={3} padding={10} />
						</Menu>
					</Sider>

					<Layout>
						<Content>
							<div
								style={{
									transition: "0.2s",
									paddingLeft: navbarWidth,
								}}
							>
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
