import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import * as pages from "./pages/Pages";
import { Profile } from "./pages/Profile";
import { RegisterPage } from "./pages/Register";
import { Home } from "./pages/Home";
import "../src/assets/styles/index.css";
import Chat from "./components/Chat";
function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeChange = (checked) => {
		console.log(checked);
		setDarkMode(checked);
	};
	return (
		<Router>
			<Routes>
				<Route path="/register" element={<RegisterPage />} />

				<Route path="/" element={<Dashboard darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />}>
					<Route index element={<pages.Profile />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/forms" element={<pages.Forms />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login-temp" element={<RegisterPage></RegisterPage>}></Route>
					<Route path="/signup" element={<pages.SignUp />} />
					<Route path="/settings" element={<pages.Settings />} />
					<Route path="/login" element={<Chat />} />
					<Route path="/*" element={<pages.Empty />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
