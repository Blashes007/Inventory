// import { Button } from '@mui/material';
// import React from 'react';
// import './customers.css';

// function Customers() {
//   return (
        
// <div  className='mainDiv'>
      
//           <h1 >hello</h1>
        

//           </div>   


    

//   )
    

  
     
  
// }

// export default Customers;





import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./customers.css";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { DeleteOutline } from "@material-ui/icons";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// const btnstyle = { marginTop: "50px", marginLeft: "1100px", backgroundColor:'#727171',  };
const btnstyle = { marginTop: "5%", marginLeft: "93%", backgroundColor:'#727171',  };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#727171',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Customers() {
  const [open, setOpen] = React.useState(false);
  const [DisplayUname, setUname] = React.useState("");
  const [Customerid, setCustomerid] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState();

  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleOpen(id, name) {
    setUname(name);
    setCustomerid(id);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  var CryptoJS = require("crypto-js");
  const e1 =sessionStorage.getItem("Username")
  var b1 = CryptoJS.AES.decrypt(e1, 'unam@encrypt');
  var uname = b1.toString(CryptoJS.enc.Utf8);
  const e2 =sessionStorage.getItem("Password")
  var b2 = CryptoJS.AES.decrypt(e2, 'pass@encrypt');
  var pwd = b2.toString(CryptoJS.enc.Utf8);

  async function CustomerDetails() {
    try {
      let result = await fetch(
        "https://api.iotech.com.np/api/customerlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json0",
            Accept: "application/json",
            username: uname,
            password: pwd,
          },
        }
      );
      result = await result.json();
      setTableData(JSON.parse(JSON.stringify(result)));

      console.log(tableData);
    } catch (error) {}
  }



  async function DeleteCustomer() {
    try {
      let result = await fetch("https://api.iotech.com.np/api/deletecustomerdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json0",
          Accept: "application/json",
          username: uname,
          password: pwd,
          customer_id : Customerid,
        
        },
      });
      result = await result.json();

      CustomerDetails();
    } catch (error) {}
  }




  



  function TransitionsModal() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open1}
          onClose={handleClose1}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open1}>
            <div className={classes.paper}>
              <div className="infotry">
                <Typography
                  gutterBottom
                  varient="h3"
                  align="center"
                ></Typography>
                <Card
                  style={{
                    maxWidth: 700,
                    margin: "0 auto",
                    padding: "20px 5px",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      edit Customer Details{" "}
                    </Typography>

                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          type="text"
                          label="Customer Name"
                          placeholder="Enter your Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          type="text"
                          label="Customer Address"
                          placeholder="Enter your Address"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type="user_id"
                          label="user_id"
                          placeholder="Enter your user_id"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type="text"
                          label="company_name No."
                          placeholder="Enter your Phone No."
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type="text"
                          label="Company Name"
                          placeholder="Enter your Company Name"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Button variant="contained" color="primary" fullWidth>
                        Submit
                      </Button>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

  function ChildModel() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">
              Do you really want to Delete this user?
            </h2>
            <p id="parent-modal-description">Click yes if you want to Delete</p>
            {DisplayUname}
            <ConfirmationButton />
          </Box>
        </Modal>
      </div>
    );
  }

  function ConfirmationButton() {
    return (
      <div>
        <Button onClick={() => Delete(Customerid)}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </div>
    );
  }

  function Delete() {
    DeleteCustomer();

    handleClose();
  }

  useEffect(() => {
    CustomerDetails();
  }, []);

  function handleClick() {
    navigate("/addCustomer");
  }
  
  function UpdateCustomer(id,name,vat,phone){
  
   navigate("/updatecustomer",{ state: { customer_id: id, company_name : name , vatno : vat, phoneno : phone } })
  }

  function editUser() {
    navigate("/edituser");
  }

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div  className='mainDiv'>
      <Button
        onClick={() => {
          handleClick();
        }}
        style={btnstyle}
        variant="contained"
        id="myBtn"
        required
      >
        {" "}
        Add{" "}
      </Button>

      <div className='userListUser'>
           <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1110 }} aria-label="simple table">
                <TableHead>
                
                    
                    <TableRow>
                   
                      <StyledTableCell align="right">Name</StyledTableCell>
                      <StyledTableCell align="right">user_id</StyledTableCell>
                      <StyledTableCell align="right">company_name</StyledTableCell>
                      <StyledTableCell align="right">vat_no</StyledTableCell>
                      <StyledTableCell align="right">Company</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                     
                      
                      
                    
                    </TableRow>

                </TableHead>

                   

               
                   
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.customer_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{row.customer_id}</TableCell>
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.company_name}</TableCell>
              <TableCell align="right">{row.vat_no}</TableCell>
              <TableCell align="right">{row.phone_number}</TableCell>
              
                  
              {/* handleOpen1 */}
                  <div  align="right">
                    <TableCell >
                      <button 
                        onClick={() =>UpdateCustomer(row.customer_id,row.company_name,row.vat_no,row.phone_number)}
                        className="userListEdit"
                      >
                        Edit
                      </button>
                    </TableCell>

                    <TableCell  >
                      <DeleteOutline 
                        className="userListDelete"
                        onClick={() => handleOpen( row.customer_id)}
                      />
                    </TableCell>
                  </div>
                </StyledTableRow>
              ))}
            </TableBody>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
        <ChildModel />
        <TransitionsModal />
      </div>
    </div>
  );
}

export default Customers;

