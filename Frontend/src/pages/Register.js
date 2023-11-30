// src/pages/Register.js
import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [formType, setFormType] = useState("login");
  const navigate = useNavigate();

  const formStyle = {
    background: "linear-gradient(135deg, #676A71, #3B4048)",
    padding: 20,
    width: 300,
    margin: "50px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonContainerStyle = {
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-around",
  };

  const upStyle = {
    padding: "15px 30px",
    background: "none",
    color: "#decc80",
    cursor: "pointer",
    fontSize: 16,
    transition: "background 0.3s, color 0.3s",
  };

  const switchForm = (buttonText) => {
    navigate("/" + buttonText);
    setFormType(buttonText);
  };

  const handleHover = (e) => {
    e.target.style.background = "#C0C0C0";
    e.target.style.color = "white";
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "none";
    e.target.style.color = "#decc80";
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={5} style={formStyle}>
        <Grid container item xs={12} justifyContent="center">
          <img
            src="https://i.imgur.com/MgnwjM9.png"
            alt="logo"
            style={{ width: "100%", height: "auto", maxWidth: "150px" }}
          />
        </Grid>

        <Grid
          style={{
            padding: "20px",
          }}
        >
          {formType === "login" ? (
            <Login />
          ) : (
            <SignUp switchForm={switchForm} />
          )}
        </Grid>
        <div style={buttonContainerStyle}>
          <Button
            onClick={() => switchForm("login")}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={upStyle}
          >
            Log In
          </Button>
          <Button
            onClick={() => switchForm("signup")}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={upStyle}
          >
            Sign Up
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default RegisterPage;
