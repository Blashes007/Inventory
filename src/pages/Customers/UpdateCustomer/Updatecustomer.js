
import './updatecustomer.css';
import {  useNavigate,useLocation } from "react-router-dom";
import LinearWithValueLabel from "../../../components/Loginpage/progress";
import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";


export default function UpdateCustomer() {
    

    const location = useLocation();
    const [Phoneno, setPhoneno ]= React.useState(location.state.phoneno);
    const [Customerid, setCustomerid] = React.useState(location.state.customer_id);
    const [Vatno, setVatno] = React.useState(location.state.vatno);
    const [CompanyName, setCompanyName] = React.useState(location.state.company_name);

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
   

    async function UpdateCustomer() {

        try {
          let result = await fetch(
            " https://api.iotech.com.np/api/updatecustomerdetails",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json0",
                Accept: "application/json",
                username: uname,
                password: pwd,
                customer_id:Customerid,
                Phone_number:Phoneno,
                vat_no:Vatno,
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

      function Update(){
        UpdateCustomer();
    

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
            if(Customerid!=="" && Vatno!=="" && Phoneno!==""  )
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
        
        <div className="mainDiv"  >

           
            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            
            <Card style={{maxWidth:700,margin:"0 auto",padding:"20px 5px"}}>
                <CardContent>

                
                <CloseIcon  className="close_icon" onClick={addCustClose}/>
                

               
                    <Typography gutterBottom variant="h5">Update Customer Detail</Typography>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    
                    <Grid container spacing={1}>
                    
                        <Grid xs={12} sm={6} item>
                            <TextField value={Customerid} type="hidden" />
                           
                        </Grid>
 
                        <Grid xs={12} item>
                            <TextField value={Vatno} onChange={(e)=>setVatno(e.target.value)} type="text" label="Vat No." placeholder="VatNo" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField value={Phoneno} onChange={(e)=>setPhoneno(e.target.value)} type="text" label="Phone No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                        </Grid>
                        <Button onClick={() => { Submit(); Update(UpdateCustomer); addCustClose1();}} variant="contained" color="primary" fullWidth>
                            Submit 
                        </Button>
 
                    </Grid>
                   
                </CardContent>
            </Card>
            
        </div>

    )
    }