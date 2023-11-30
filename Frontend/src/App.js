import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import * as pages from "./pages/Pages";
import RegisterPage from "./pages/Register";
import "../src/assets/styles/index.css";
function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeChange = (checked) => {
		console.log(checked);
		setDarkMode(checked);
	};
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />}>
					<Route index element={<pages.Profile />} />
					<Route path="/profile" element={<pages.Profile />} />
					<Route path="/forms" element={<pages.Forms />} />
					<Route path="/home" element={<pages.Home />} />
					<Route path="/login" element={<RegisterPage></RegisterPage>}></Route>
					<Route path="/signup" element={<pages.SignUp />} />
					<Route path="/settings" element={<pages.Settings />} />
					<Route path="/*" element={<pages.Empty />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
