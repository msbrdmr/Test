import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as Components from "../assets/loginMenu/MenuComponents";

function RegisterPage() {
	const [logIn, toggle] = React.useState(true);
	const navigate = useNavigate();

	const [logInfo, setLogInfo] = useState({
		userMail: "",
		userPassword: "",
	});

	axios.defaults.withCredentials = true;

	const sendLogInfo = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:8081/login", logInfo);
			if (response.data.Message === "Success") {
				navigate("/home");
			} else {
				alert(response.data.Message);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const [signInfo, setSignInfo] = useState({
		userName: "",
		userSurname: "",
		userMail: "",
		userPassword: "",
	});

	axios.defaults.withCredentials = true;

	const sendSignInfo = (e) => {
		console.log("signInfo", signInfo);
		e.preventDefault();
		axios
			.post("http://localhost:8081/signup", signInfo)
			.then((res) => {
				if (res.data.Message === "Success") {
					console.log("person added successfully");
					toggle(true);
				} else {
					alert(res.data.Message);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Components.Container>
				<Components.SignUpContainer logInIn={logIn}>
					<Components.Form>
						<Components.Title style={{ margin: "0px 0 20px" }}>Create Account</Components.Title>
						<Components.StyledTextField onChange={(e) => setSignInfo({ ...signInfo, userName: e.target.value })} type="text" label="Name" variant="outlined" fullWidth />
						<Components.StyledTextField onChange={(e) => setSignInfo({ ...signInfo, userSurname: e.target.value })} type="text" label="Surname" variant="outlined" fullWidth />
						<Components.StyledTextField onChange={(e) => setSignInfo({ ...signInfo, userMail: e.target.value })} type="email" label="Email" variant="outlined" fullWidth />
						<Components.StyledTextField onChange={(e) => setSignInfo({ ...signInfo, userPassword: e.target.value })} type="password" label="Password" variant="outlined" fullWidth />
						<Components.Button onClick={sendSignInfo} style={{ margin: "10px 0 0px" }}>
							Sign Up
						</Components.Button>
					</Components.Form>
				</Components.SignUpContainer>

				<Components.LogInContainer logInIn={logIn}>
					<Components.Form>
						<Components.Title>Login</Components.Title>

						<Components.StyledTextField onChange={(e) => setLogInfo({ ...logInfo, userMail: e.target.value })} type="email" label="Email" variant="outlined" fullWidth />
						<Components.StyledTextField onChange={(e) => setLogInfo({ ...logInfo, userPassword: e.target.value })} type="password" label="Password" variant="outlined" fullWidth />

						<Components.Anchor href="#">Forgot your password?</Components.Anchor>
						<Components.Button onClick={sendLogInfo}>Login</Components.Button>
					</Components.Form>
				</Components.LogInContainer>

				<Components.OverlayContainer logInIn={logIn}>
					<Components.Overlay logInIn={logIn}>
						<Components.LeftOverlayPanel logInIn={logIn}>
							<Components.Title>Welcome Back!</Components.Title>
							<Components.Paragraph>Lorem ipsum dolor sit amet, consectetur</Components.Paragraph>
							<Components.GhostButton onClick={() => toggle(true)}>Log In</Components.GhostButton>
						</Components.LeftOverlayPanel>

						<Components.RightOverlayPanel logInIn={logIn}>
							<Components.Title>Hello!</Components.Title>
							<Components.Paragraph>Lorem ipsum dolor sit amet, consectetur</Components.Paragraph>
							<Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
						</Components.RightOverlayPanel>
					</Components.Overlay>
				</Components.OverlayContainer>
			</Components.Container>
		</div>
	);
}

export default RegisterPage;
// export default RegisterPage
