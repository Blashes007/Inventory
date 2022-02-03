
import './updatecustomer.css';
import {  useNavigate,useLocation } from "react-router-dom";
import LinearWithValueLabel from "../../../components/Loginpage/progress";
import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@material-ui/lab";
import { Divider } from '@mui/material';

const btnstyle={
    backgroundColor:'white',
    boxShadow:'0px 0px 0px 1px rgba(0, 0, 0, 0.75)',

}

const styledivider={
    width: '110%',
    marginLeft:-2,
  
    marginTop:2,

}


const popup = { position: "absolute", right: "20px", top: "100px" };
const popup1 = { display: "none", color: "green" };

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



function EditCustomer(){
    <div style={popup}>
          <div id="successlogin" style={popup1}>
            <Alert variant="filled" severity="success">
              Data Updated Sucessfully.
            </Alert>
          </div>
         
        </div>
  navigate('/Customers')
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
        
        <div className="mainDivv"  >

           
            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            <div className="cardDiv">

          
            <Card >
                <CardContent>

                
              
                
                     <div className='EditCustomer'>
                    <Typography gutterBottom variant="h5">Edit Customer Details</Typography>
                    </div>
               
                    <Divider sx={styledivider}/> 
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    
                    <Grid container spacing={1}>

                    <Grid >
                            <TextField value={Customerid} type="hidden" />
                           
                        </Grid>

                    <div className='VatnoDiv' >
                        <label>Vatno :</label>
                        <Grid  >
                            <TextField  value={Vatno} onChange={(e)=>setVatno(e.target.value)} type="text"   variant="outlined" fullWidth required />
                        </Grid>
                    </div>

                    <div className='PhoneDiv' >
                        <label>Phone No :</label>
                        <Grid  >
                            <TextField  value={Phoneno} onChange={(e)=>setPhoneno(e.target.value)} type="text"   variant="outlined" fullWidth required />
                        </Grid>
                    </div>

                    <div className='CompanyNameDivEdit' >
                        <label>Company Name :</label>
                        <Grid  >
                            <TextField  value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)} type="text"   variant="outlined" fullWidth required />
                        </Grid>
                    </div>

                        
{/*                     
                        <Grid >
                            <TextField value={Customerid} type="hidden" />
                           
                        </Grid>

                        <Grid >
                            <TextField value={Vatno} onChange={(e)=>setVatno(e.target.value)} type="text" label="Vat No." placeholder="VatNo" variant="outlined" fullWidth required />
                        </Grid> 
                        <Grid >
                            <TextField value={Phoneno} onChange={(e)=>setPhoneno(e.target.value)} type="text" label="Phone No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                        </Grid>
                        <Grid >
                            <TextField value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                        </Grid> */}
                        <div className='submitbtn'>
                        <Button  style={btnstyle} onClick={() => { Submit(); Update(UpdateCustomer); EditCustomer();}} variant="contained"  fullWidth>
                            Submit 
                        </Button>
                        </div>
 
                    </Grid>
                   
                </CardContent>
            </Card>
            </div>

            
            
        </div>

    )
    }