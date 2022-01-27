import React from 'react'
// import './purchasetable.css'
// import '../../app.css'
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";
import {  useNavigate } from "react-router-dom";
// import LinearWithValueLabel from "../progress";

export default function Addpurchasedetails() {



    const [Vendorid, setVendorid] = React.useState('');
    const [Userid, setUserid] = React.useState('');
    const [Invoiceno, setInvoiceno] = React.useState('');
    const [TotalAmount, setTotalAmount] = React.useState('');
  
 
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

    
   

    async function Addpurchasedetails() {

        try {
          let result = await fetch(
            "https://api.iotech.com.np/api/addpurchasedetails",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json0",
                Accept: "application/json",
                username: uname,
                password: pwd,
                user_id:Userid,
                vendor_id:Vendorid,
                invoice_no:Invoiceno,
                total_amount:TotalAmount,
                
                
      
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
        Addpurchasedetails();
    

    }

function addCustClose(){
navigate('/closeCustDetails')
}

function addCustClose1(){
    <div>
    
    {/* <Alert variant="filled" severity="success">
    <LinearWithValueLabel />
    added Sucessfully! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </Alert> */}
  </div>
  navigate('/closeCustDetails')
    }
    
   

    function Submit()
        {
            if(Vendorid!=="" && Invoiceno!=="" && Userid!=="")
            {
                console.log(Vendorid);
                // console.log(CompanyName);
            }
            else
            {
                document.getElementById('error').style.display = 'block';
            }
            
        }
    return (
        
        <div className="purchasetable" >

            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            <Card style={{maxWidth:700,margin:"0 auto",padding:"20px 5px"}}>
                <CardContent>

                
                <CloseIcon  className="close_icon" onClick={addCustClose}/>
                
                    
                    
                    <Typography gutterBottom variant="h5">New Purchase Details</Typography>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField onChange={(e)=>setVendorid(e.target.value)} type="text" label="vendor ID" placeholder="Vendor Id" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setUserid(e.target.value)} type="Userid" label="Userid" placeholder="Enter your Userid" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setInvoiceno(e.target.value)} type="text" label="Invoiceno No." placeholder="Enter your Invoice No." variant="outlined" fullWidth required />
                        </Grid>
                        
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setTotalAmount(e.target.value)} type="text" label="Total Amount" placeholder="Enter Total amount" variant="outlined" fullWidth  />
                        </Grid>
                        <Button onClick={() => { Submit(); Add(Addpurchasedetails); }} variant="contained" color="primary" fullWidth>
                            Submit 
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}