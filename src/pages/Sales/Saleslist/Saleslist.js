import React from 'react'
import { useState, useEffect } from "react";
import { Button, TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from '@mui/material/TableCell';
import { DeleteOutline } from "@material-ui/icons";
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
  
  const btnstyle = { marginTop: "50px", marginLeft: "1100px" };
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
      backgroundColor: theme.palette.common.black,
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



function Saleslist() {
 
    const [PurchaseId, setPurchaseId] = React.useState("");
    const [DisplayUname, setUname] = React.useState("");
    const [open, setOpen] = React.useState(false);

    
    const navigate = useNavigate();


  const [tableData, setTableData] = useState([]);
  var CryptoJS = require("crypto-js");
  const e1 =sessionStorage.getItem("Username")
  var b1 = CryptoJS.AES.decrypt(e1, 'unam@encrypt');
  var uname = b1.toString(CryptoJS.enc.Utf8);
  const e2 =sessionStorage.getItem("Password")
  var b2 = CryptoJS.AES.decrypt(e2, 'pass@encrypt');
  var pwd = b2.toString(CryptoJS.enc.Utf8);

  async function SalesDetails() {
    try {
      let result = await fetch(
        "https://api.iotech.com.np/api/saleslist",
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

      console.log(result);
    } catch (error) {
         console.log(error);
    }
  }

  useEffect(()=>{
    SalesDetails();

    },[])


    async function DeletePurchase() {
        try {
          let result = await fetch("https://api.iotech.com.np/api/deleteSalesDetails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json0",
              Accept: "application/json",
              username: uname,
              password: pwd,
              purchase_id: PurchaseId,
            
            },
          });
          result = await result.json();
    
          SalesDetails();
        } catch (error) {}
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
            <Button onClick={() => Delete(PurchaseId)}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        );
      }
    
      function Delete() {
        DeletePurchase();
    
        handleClose();
      }
    
      useEffect(() => {
        SalesDetails();
      }, []);
    
      function handleOpen(PurchaseId, name) {
        setUname(name);
        setPurchaseId(PurchaseId);
        setOpen(true);
      }
    
      const handleClose = () => {
        setOpen(false);
      };



      function EditPurchase(id,vendorid,invoiceno,Amt){
        navigate("/EditPurchase", { state: { purchase_id: id, vendor_id:vendorid,  invoice_no :invoiceno ,total_amount:Amt } })
      }
      
      // row.purchase_id, row.invoice_no, row.total_amount, row.date, row.company_name, row.vat_no, row.phone_number


    
  function handleClick() {
    navigate("/addSalesDetails");
  }

    return (
     
        <div className='purchasetable'>
        <Button
          onClick={() => {
            handleClick();
          }}
          style={btnstyle}
          variant="contained"
          color="primary"
          id="myBtn"
          required
        >
          {" "}
          Add{" "}
        </Button>
        
        <div className='userListUser'>
             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                  
                      
                      <TableRow>
                        
                        <StyledTableCell align="right">Invoice No.</StyledTableCell>
                        <StyledTableCell align="right">Total Amount</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                      </TableRow>
        
                  </TableHead>
        
                     
        
                 
                     
          <TableBody>
            {tableData.map((row) => (
              <StyledTableRow key={row.purchase_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                
                <TableCell align="right">{row.invoice_no}</TableCell>
                <TableCell align="right">{row.total_amount}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
         
           
              
                  
              {/* handleOpen1 */}
                  <div  align="right">
                    <TableCell >
                      <button 
                      onClick={() =>EditPurchase(row.purchase_id, row.vendor_id, row.invoice_no, row.total_amount)}
                      className="editbtn"
                    >
                       
                      
                        Edit
                      </button>
                    </TableCell>

                    <TableCell  >
                      <DeleteOutline 
                       
                       className="userListDelete"
                       onClick={() => handleOpen( row.purchase_id)}
                    
                      />
                    </TableCell>
                  </div>
                </StyledTableRow>
              ))}
            </TableBody>

            <TablePagination
           
            />
          </Table>
        </TableContainer>
        <ChildModel />
        
      </div>
    </div>
        
    )
}
export default Saleslist;
