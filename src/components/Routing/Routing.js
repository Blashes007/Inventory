
import React from 'react'
import "./routing.css";
import Auth from '../Loginpage/loggedIn'

import Loginpage from '../Loginpage/loginpage';
import Sidebar from '../sidebar/Sidebar';
// import Container from '../container/Container';
import { useLocation } from 'react-router-dom'

export default function Routing() {
    return <>{Auth()?<Test/>:<Loginpage/>}</>
        
  
}
function LoadUrl()
{
  const location = useLocation()
  var slug =location.pathname;
//   if(slug==="/home"){
//     return(
//       <Sidebar/>
//     )
//   }
//   if(slug==="/users"){
//     return(
//       <UserList/>
//     )
//   }

//   if(slug==="/Purchaseslist"){
//     return(
//       <PurchasesList/>
//     )
//   }
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
