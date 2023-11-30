import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import * as pages from "./pages/Pages";
import RegisterPage from "./pages/Register";
function App() {
	return (
		<Router>
			{/* <Dashboard /> */}
			<Routes>
				<Route path="/" element={<Dashboard />}>
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
