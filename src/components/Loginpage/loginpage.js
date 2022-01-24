import React from 'react'
import './loginpage.css'
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { Alert } from "@material-ui/lab";
import LinearWithValueLabel from "./progress";


const paperStyle = { margin: "0px auto", border: "none" };
const divstyle = { marginTop: "20px" };
const btnstyle = { marginTop: "50px", color: "white" };
const popup = { position: "absolute", right: "5px", top: "10px" };
const popup1 = { display: "none", color: "green" };
const popup2 = { display: "none", color: "red" };
const centercontent = { textAlign: "center" };
const container = { height: "500px", overflow: "hidden" };
var CryptoJS = require("crypto-js");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



export default function Loginpage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  var handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.code === "Enter") {
    
      Login();
    }
  };
  const [disable, setDisable] = React.useState(false);

  async function Login() {
    

    let result = await fetch(
      "https://api.iotech.com.np/api/loginauthentication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json0",
          Accept: "application/json",
          username: username,
          password: password,
        },
      }
    );
    result = await result.json();
    var Result = JSON.parse(JSON.stringify(result));
    
    if (Result.message == "success") {
      sessionStorage.setItem(
        "Username",
        CryptoJS.AES.encrypt(username, "unam@encrypt").toString()
      );
      sessionStorage.setItem(
        "Password",
        CryptoJS.AES.encrypt(password, "pass@encrypt").toString()
      );

      document.getElementById("successlogin").style.display = "block";
      console.log("successlogin");
      const timer = setTimeout(() => {
        navigate("/home");
      }, 1000);
      // navigate("/home");
    } else {
      
      var alertdiv = document.getElementById("failedlogin");
      alertdiv.style.display = "block";
      const timer = setTimeout(() => {
        document.getElementById("failedlogin").style.display = "none";
        setDisable(false);
      }, 4000);
    }
  }




  

 
    return (
      <div className="green">
      <div>
        
        <Paper
          className="box_div"
          elevation={15}
          style={container}
          style={paperStyle}
        >
          
          <Grid container spacing={0}>
          <Grid className="company_name_div" item xs>
            <div className="carpic"><img src="carlogo.png"/></div>
              <div className="txtBox">
                <h1>C.M AUTO</h1>
                <h4>Customer Management System</h4>
              </div>
              <div className="txtBox2">
                <p>A Powerful & easy</p>
                <p>to use Application</p>
                <p>for Managing customer Details </p>
              </div>
              <div className="txtBox3">
                <p>version 1.0</p>
              </div>
            </Grid>
            <Grid className="login_div" item xs>
             
  
              <div className="quecreate">
                <p className="que">Don't have account? <button className="create">CREATE ACCOUNT</button></p>
               
              </div>
              <div className="text1">
                <h2>Log into CM AUTO</h2>
                <p className="text1sub">Enter your login details below</p>
              </div>
              <div>
              <h4 className="username">USERNAME</h4>
              </div>
              
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div className="personicon"><PersonIcon fontSize="small" /></div>
              
              
                <TextField
                
               
  
                
                className="usernameTxt" variant="outlined" type="Username"
                
                
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidthrequired
                />
              </Box>
              <div className="password">
              <h4>PASSWORD</h4>
              </div>
              
              <Box
                style={divstyle}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <div className="keyicon"><KeyIcon fontSize="small" /></div>
                
                <TextField
               
                className="usernameTxt"
                  
                  placeholder="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeypress}
  
                  fullWidth
                  // required
                />
              </Box>
              
              <div className="signinbutton" >
              
                <Button
                 
                  style={btnstyle}
                  className="continueBtn"
                  variant="contained"
                  id="myBtn"
                  required
                  disabled={disable} onClick={() => {setDisable(true); Login();}}
                  
                 
                >
                  <p>SIGN IN</p>
             
                </Button>
                <div className="textlast">
                <p>Designed & created by I.O Technology</p> 
                </div>
               
              </div>
             
            </Grid>
           
          </Grid>
        </Paper>
  
        <div style={popup}>
          <div id="successlogin" style={popup1}>
            <Alert variant="filled" severity="success">
              <LinearWithValueLabel />
              Logged In Sucessfully!
            </Alert>
          </div>
          <div id="failedlogin" style={popup2}>
            <Alert variant="filled" severity="error">
              Authentication failed. Please check Username and Password{" "}
              <LinearWithValueLabel />
            </Alert>
          </div>
        </div>
      </div>
      </div>
    );

    }





