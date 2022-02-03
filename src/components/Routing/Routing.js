
import React from 'react'
import "./routing.css";
import Auth from '../Loginpage/loggedIn'

import Loginpage from '../Loginpage/loginpage';
import Sidebar from '../sidebar/Sidebar';
// import Container from '../container/Container';
import { useLocation } from 'react-router-dom'
import Customers from '../../pages/Customers/CustomerList/Customers';

import Container from '../container/container';
import Addcustomer from '../../pages/Customers/AddCustomer/AddCustomer';
import UpdateCustomer from '../../pages/Customers/UpdateCustomer/Updatecustomer';
import Purchaselist from '../../pages/Purchase/PurchaseList/Purchaselist';
import Addpurchasedetails from '../../pages/Purchase/AddPurchase/Addpurchase';
import Editpurchase from '../../pages/Purchase/EditPurchase/Editpurchase';
import Saleslist from '../../pages/Sales/Saleslist/Saleslist';
import AddSalesDetails from '../../pages/Sales/Addsales/Addsales';
import AddVehicle from '../../pages/Customers/AddVehicle/AddVehicle';

export default function Routing() {
    return <>{Auth()?<Test/>:<Loginpage/>}</>
        
  
}
function LoadUrl()
{
  const location = useLocation()
  var slug =location.pathname;

  if(slug==="/Dashboard"){
    return(
      <Container/>
    )
  }
  
  if(slug==="/home"){
    return(
      <Container/>
    )
  }
  if(slug==="/Customers"){
    return(
      <Customers/>
    )
  }

  if(slug=="/addCustomer"){
    return(
      <Addcustomer/>
    )}

 
      if(slug=="/AddvehicleDetails"){
        return(
          <AddVehicle/>
        )}
  

  
    if(slug=="/updatecustomer"){
      return(
        <UpdateCustomer/>
      )
    }

   

  




    //Purchase

  if(slug==="/Purchase"){
    return(
      <Purchaselist/>
    )
  }

  if(slug=="/addpurchasedetails"){
    return(
      <Addpurchasedetails/>
     
    )
  }
  if(slug=="/EditPurchase"){
    return(
      <Editpurchase/>
    
    )
  }
  if(slug=="/returnpurchasetable"){
    return(
      <Purchaselist/>
    
    )
  }


  //Sales

  if(slug=="/Sales"){
    return(
      <Saleslist/>
    
    )
  }

  if(slug=="/addSalesDetails"){
    return(
      <AddSalesDetails/>
    
    )
  }




 
//   if(slug==="/Saleslist"){
//     return(
//       <SalesList/>
//     )
//   }
  // if(slug=="/Repair"){
  //   return(
  //     <Repair/>
  //   )
  // }
//   if(slug==="/Report"){
//     return(
//       <Report/>
//     )
//   }
  // if(slug=="/Settings"){
  //   return(
  //     <Settings/>
  //   )
  // }
  
}
function Test()
{


      //  function Logout(){
      //   sessionStorage.clear();
      //   navigate("/");
      //  } 
       
       return(
         <div>
      {/* <Topbar /> */}
      <div className="container">
        <Sidebar/>
       
       {LoadUrl()}
        
         
   </div>

         </div>
         
          

        
          )
  


}
