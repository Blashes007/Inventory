


import React from 'react';
import {  useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";



const popup = { position: "absolute", right: "20px", top: "100px" };
const popup1 = { display: "none", color: "green" };



export default function Editpurchase() {
    
    

    const location = useLocation();
    const [PurchaseId, setPurchaseId] = React.useState(location.state.purchase_id);
    const [VendorId, setVendorId] = React.useState(location.state.vendor_id);
    const [InvoiceNo, setInvoiceNo] = React.useState(location.state.invoice_no);
    const [TotalAmount, setTotalAmount] = React.useState(location.state.total_amount);
  

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

    
   

    async function UpdatePurchase() {

        try {
          let result = await fetch(
            " https://api.iotech.com.np/api/updatepurchasedetails",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json0",
                Accept: "application/json",
                username: uname,
                password: pwd,
                purchase_id:PurchaseId,
                vendor_id:VendorId,
                invoice_no:InvoiceNo,
                total_amount:TotalAmount
                
                
      
              },
            }
          );
          result = await result.json();
           setTableData(JSON.parse(JSON.stringify(result)));
       
           console.log(tableData);
        } catch (error) {
        }
       
      
      }

      function Update(){
        UpdatePurchase();
    

    }

// function addCustClose(){
// navigate('/closeCustDetails')
// }



// function SubmitEditPurchaseForm(){
  
//     navigate('/editpurchaseform')
    
// }
    
function returnPurchasetable(){
   

   
  
        document.getElementById("successlogin").style.display = "block";
        console.log("successlogin");
        const timer = setTimeout(() => {
        navigate("/returnpurchasetable")
        }, 1000);
        
      
    
}

    function Submit()
        {
            if(PurchaseId!=="" && InvoiceNo!=="" )
            {
                console.log(PurchaseId);
                console.log(InvoiceNo);
                console.log(VendorId);
            }
            else
            {
                document.getElementById('error').style.display = 'block';
            }
            
        }
    return (
        
        <div className="mainDiv"  >

           
            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            
            <Card style={{maxWidth:700,margin:"0 auto",padding:"20px 5px"}}>
                <CardContent>

                
                <CloseIcon  className="close_icon" />
                
  
               
                    <Typography gutterBottom variant="h5">Edit Purchase Detail</Typography>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    
                    <Grid container spacing={1}>
                    
                        <Grid xs={12} sm={6} item>
                            <TextField value={PurchaseId}  onChange={(e)=> setPurchaseId(e.target.value)} type="text" label="PurchaseId" placeholder="Enter Purchase ID " variant="outlined" fullWidth required />
                           
                        </Grid>
                        <Grid xs={12} item>
                            <TextField   value={VendorId} onChange={(e)=>setVendorId(e.target.value)}  label="vendorId" placeholder=" Enter Vendor ID" variant="outlined" fullWidth required />
                        </Grid>
                        
                        <Grid xs={12} item>
                            <TextField value={InvoiceNo} onChange={(e)=>setInvoiceNo(e.target.value)} type="payment" label="Invoice No" placeholder="Enter Invoice No" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField value={TotalAmount} onChange={(e)=>setTotalAmount(e.target.value)} type="payment" label="Total Amount" placeholder="Enter Total Amount" variant="outlined" fullWidth required />
                        </Grid>
                        <Button onClick={() => { Submit(); Update(UpdatePurchase); returnPurchasetable();}} variant="contained" color="primary" fullWidth>
                            Submit 
                        </Button>
                        
                    </Grid>
                   
                </CardContent>
            </Card>

            <div style={popup}>
          <div id="successlogin" style={popup1}>
            <Alert variant="filled" severity="success">
              Data Updated Sucessfully.
            </Alert>
          </div>
         
        </div>
            
        </div>

    )
    }