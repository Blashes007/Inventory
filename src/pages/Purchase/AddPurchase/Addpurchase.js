import React from 'react'
// import './purchasetable.css'
// import '../../app.css'
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";
import {  useNavigate } from "react-router-dom";
// import LinearWithValueLabel from "../progress";
import { Divider } from '@mui/material';
import './addpurchase.css'


const style = {
    width: '166%',
    marginLeft: -30,
    marginTop:2,
    

  };

  const btnStyle ={
      width:90,
      height:40,
      marginTop:110,
      marginLeft:-90,
      backgroundColor:'white',
      boxShadow:'0px 0px 0px 1px rgba(0, 0, 0, 0.75)'

  }

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
            <div className='CardDiv'>
            <Card >
                <CardContent>
                    <div className='newPurchaseDetail'>
                    <Typography gutterBottom variant="h5"> Add New Purchase Details</Typography>
                    </div>
                    <Divider style={style}/>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    <Grid container spacing={1}>

                        <div className='VendorIdDiv' >
                        <label>Vendor Id :</label>
                        <Grid  >
                            <TextField  onChange={(e)=>setVendorid(e.target.value)} type="text"   variant="outlined" fullWidth required />
                        </Grid>
                        </div>

                        <div className='UserIdDiv' >
                        <label>User Id :</label>
                        <Grid  >
                            <TextField  onChange={(e)=>setUserid(e.target.value)} type="text"   variant="outlined" fullWidth required />
                        </Grid>
                        </div>

                        <div className='InvoicenoDiv' >
                        <label>Invoice No :</label>
                        <Grid  >
                            <TextField  onChange={(e)=>setInvoiceno(e.target.value)}type="text"   variant="outlined" fullWidth required />
                        </Grid>
                        </div>

                        <div className='TotalAmountDiv' >
                        <label>Total Amount :</label>
                        <Grid  >
                            <TextField  onChange={(e)=>setTotalAmount(e.target.value)}type="text"   variant="outlined" fullWidth required />
                        </Grid>
                        </div>

                        {/* <Grid xs={12} sm={6} item>
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
                        </Grid> */}
                        <Button  style={btnStyle} onClick={() => { Submit(); Add(Addpurchasedetails); }} variant="contained" >
                            Submit 
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
            </div>
        </div>

    )
}