import React from 'react';
import './addcustomer.css';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";
import {  useNavigate } from "react-router-dom";
import { Divider } from '@mui/material';





const popup = { position: "absolute", right: "20px", top: "100px" };
const popup1 = { display: "none", color: "green" };

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

function ReturnCustomerTable(){
    document.getElementById("successlogin").style.display = "block";
    console.log("successlogin");
    const timer = setTimeout(() => {
    navigate("/returnCustomertable")
    }, 1000);
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
            <div className='Firstform'>
                

            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            <Card   style={{maxWidth:500,padding:"20px 30px 0px 200px" }}>
                <CardContent>

                <div className="close_icon">
                <CloseIcon  onClick={addCustClose}/>
                </div>                
                    
                    <div className='newCustomer'>
                    <Typography gutterBottom variant="h5">New Customer Details</Typography>
                    </div>
                    <Divider className='divider'/>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={8} item>
                            <TextField onChange={(e)=>setCustomerid(e.target.value)} type="text" label="Customer Name" placeholder="Enter your Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={8} item>
                            <TextField onChange={(e)=>setUserid(e.target.value)} type="Userid" label="Userid" placeholder="Enter your Userid" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={8}  item>
                            <TextField onChange={(e)=>setVatno(e.target.value)} type="text" label="Vatno No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={8}  item>
                            <TextField onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                        </Grid>
                        <Grid xs={12} sm={8}  item>
                            <TextField onChange={(e)=>setPhoneNo(e.target.value)} type="text" label="Phone Number" placeholder="Enter your Phone Number" variant="outlined" fullWidth  />
                        </Grid>
                        <div className="submitButton">
                        <Button   onClick={() => { Submit(); Add(AddCustomer); ReturnCustomerTable();}} variant="contained" color="primary" >
                            Submit 
                        </Button>
                        </div>

                    </Grid>
                </CardContent>
            </Card>
            
            </div>
{/* 
            <div className='secondForm'>
            <Typography gutterBottom varient="h3" align="center">
               
               </Typography>
               <Card   style={{maxWidth:500,padding:"20px 30px 0px 80px" }}>
                   <CardContent>
   
                   <div className="close_icon">
                   <CloseIcon  onClick={addCustClose}/>
                   </div>                
                       
                       
                       <Typography gutterBottom variant="h5">Add Vechile Details</Typography>
                       <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                       <Grid container spacing={1}>
                           <Grid xs={12} sm={10} item>
                               <TextField onChange={(e)=>setCustomerid(e.target.value)} type="text" label="Customer Name" placeholder="Enter your Name" variant="outlined" fullWidth required />
                           </Grid>
                           <Grid xs={12} sm={10} item>
                               <TextField onChange={(e)=>setUserid(e.target.value)} type="Userid" label="Userid" placeholder="Enter your Userid" variant="outlined" fullWidth required />
                           </Grid>
                           <Grid xs={12} sm={10}  item>
                               <TextField onChange={(e)=>setVatno(e.target.value)} type="text" label="Vatno No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                           </Grid>
                           <Grid xs={12} sm={10}  item>
                               <TextField onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                           </Grid>
                           <Grid xs={12} sm={10}  item>
                               <TextField onChange={(e)=>setPhoneNo(e.target.value)} type="text" label="Phone Number" placeholder="Enter your Phone Number" variant="outlined" fullWidth  />
                           </Grid>
                           <div className="submitButton">
                           <Button   onClick={() => { Submit(); Add(AddCustomer); ReturnCustomerTable();}} variant="contained" color="primary" >
                               Submit 
                           </Button>
                           </div>
   
                       </Grid>
                   </CardContent>
               </Card>
            </div>
            <div style={popup}>
          <div id="successlogin" style={popup1}>
            <Alert variant="filled" severity="success">
              Data Updated Sucessfully.
            </Alert>
          </div>
         
        </div> */}

        </div>

    )
}