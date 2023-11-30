import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp({ switchForm }) {
  const [signInfo, setSignInfo] = useState({
    UserMail: "",
    UserPassword: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const sendInfo = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", signInfo) 
      .then((res) => {
        if (res.data.Message === "Success") {
          switchForm("login");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={(e) => sendInfo(e)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setSignInfo({ ...signInfo, UserMail: e.target.value })
            }
            label="Username"
            placeholder="Username *"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            InputLabelProps={{ style: { color: "#C0C0C0" } }}
            InputProps={{ style: { color: "#C0C0C0" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setSignInfo({ ...signInfo, UserPassword: e.target.value })
            }
            label="Password"
            placeholder="Password *"
            fullWidth
            required
            type="password"
            variant="outlined"
            margin="dense"
            InputLabelProps={{ style: { color: "#C0C0C0" } }}
            InputProps={{ style: { color: "#C0C0C0" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
            style={{ color: "#decc80" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            style={{ color: "#decc80", background: "transparent" }}
            variant="contained"
            fullWidth
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignUp;
