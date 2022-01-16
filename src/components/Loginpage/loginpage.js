import React from 'react'
import '../../App.css'

import './loginpage.css'

import { styled } from '@mui/material/styles';

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockIcon from "@material-ui/icons/Lock";



const paperStyle = { margin: "0px auto", border: "none"  };
const divstyle = { marginTop: "20px" };
const btnstyle = { marginTop: "50px", color: "white"  };
const centercontent = { textAlign: "center" };
const container = { height: "500px", overflow: "hidden"  };

var CryptoJS = require("crypto-js");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





 function Loginpage() {

  

 
    return (
        <div className='green'>
    <div>
    
      
      <Paper
        className="box_div"
        elevation={15}
        style={container}
        style={paperStyle}

      >
          
        <Grid container spacing={0}>
        <Grid className="company_name_div" item xs>
        <div className="txtBox">
              <h1>C.M AUTO</h1>
              <span>Customer Management System</span>
        </div>

        <div className="txtBox1">
              <span>A powerful and easy</span>
              <span>to use application</span>
              <span>for Managing Customer details</span>
        </div>
          </Grid>


          <Grid className="login_div" item xs>
              
           
            
            <span className='Account'>Don't have you account?</span> <Button variant="outlined">Create Account</Button>
            
            <h1 className="cmauto">Log Into CM AUTO</h1>
            <span className="cmauto"> Enter your login Details below</span>
                <text className='gg'>Username</text>
              <TextField className="usernameTxt" variant="outlined" type="Username"/>
              <span className='usernameTxt1'>Password</span>
              <TextField
                className="usernameTxt"
                
                placeholder="Password"
                variant="outlined"
                type="password"
                
                required
              />
         
            
            <div style={centercontent}>
            
              <Button style={btnstyle} className="continueBtn" variant="contained" id="myBtn" required>
               login
              </Button>
              
            </div>
           
          </Grid>
        
        </Grid>
      </Paper>

     
    </div>
            
        </div>
    )

    }
export default Loginpage ;




