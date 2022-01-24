import React from 'react';
import './addcustomer.css';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";
import {  useNavigate } from "react-router-dom";
import LinearWithValueLabel from '../../../components/Loginpage/progress'

export default function Addcustomer() {



    const [Customerid, setCustomerid] = React.useState('');
    const [Userid, setUserid] = React.useState('');
    const [Vatno, setVatno] = React.useState('');
    const [PhoneNo, setPhoneNo] = React.useState('');
    const [CompanyName, setCompanyName] = React.useState('');
    const navigate = useNavigate();
    const error ={color:'red',display:'none'};


    
    

    var CryptoJS = require("crypto-js");
    const [tableData,setTableData] = useState([]);
    const e1 =sessionStorage.getItem("Username")
    var b1 = CryptoJS.AES.decrypt(e1, 'unam@encrypt');
    var uname = b1.toString(CryptoJS.enc.Utf8);
    const e2 =sessionStorage.getItem("Password")
    var b2 = CryptoJS.AES.decrypt(e2, 'pass@encrypt');
    var pwd = b2.toString(CryptoJS.enc.Utf8);

    
   

    async function AddCustomer() {

        try {
          let result = await fetch(
            "https://api.iotech.com.np/api/addcustomerdetails",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json0",
                Accept: "application/json",
                username: uname,
                password: pwd,
                user_id:Userid,
                Customer_id:Customerid,
                vat_no:Vatno,
                phone_number:PhoneNo,
                company_name:CompanyName,
                
                
      
              },
            }
          );
          result = await result.json();
           setTableData(JSON.parse(JSON.stringify(result)));
       
           console.log(tableData);
        } catch (error) {
        }
       
      
      }

      function Add(){
        AddCustomer();
    

    }

function addCustClose(){
navigate('/closeCustDetails')
}

function addCustClose1(){
    <div>
    
    <Alert variant="filled" severity="success">
    <LinearWithValueLabel />
    added Sucessfully! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </Alert>
  </div>
  navigate('/closeCustDetails')
    }
    
   

    function Submit()
        {
            if(Customerid!=="" && Vatno!=="" && Userid!=="")
            {
                console.log(Customerid);
                console.log(CompanyName);
            }
            else
            {
                document.getElementById('error').style.display = 'block';
            }
            
        }
    return (
        
        <div className="mainDiv" >

            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            <Card   style={{maxWidth:700,padding:"20px 50px" }}>
                <CardContent>

                
                <CloseIcon  className="close_icon" onClick={addCustClose}/>
                
                    
                    
                    <Typography gutterBottom variant="h5">New Customer Detail</Typography>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField onChange={(e)=>setCustomerid(e.target.value)} type="text" label="Customer Name" placeholder="Enter your Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setUserid(e.target.value)} type="Userid" label="Userid" placeholder="Enter your Userid" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setVatno(e.target.value)} type="text" label="Vatno No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setPhoneNo(e.target.value)} type="text" label="Phone Number" placeholder="Enter your Phone Number" variant="outlined" fullWidth  />
                        </Grid>
                        <Button onClick={() => { Submit(); Add(AddCustomer); addCustClose1();}} variant="contained" color="primary" fullWidth>
                            Submit 
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}