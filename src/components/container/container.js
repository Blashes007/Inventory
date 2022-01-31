
import React from 'react';
import Paper from '@mui/material/Paper';
import FeaturedInfo from '../Featuredinfo/Featuredinfo';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import './container.css';
import ColumnsGrid from '../Grid/Grid';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // marginLeft: -520,
  // marginTop:-10,
  // height:350,
  // borderRadius:10,
  // width:1100,
  boxShadow:'0px 0px 20px -6px rgba(0, 0, 0, 0.75)',
}));


function Container() {

    
  return(
  
  <div  >
   

  <div className='dotdiv'>
<span className='greendot'></span>
<span className='todayscollection'>Today's Collection.</span> 
</div>
  
  <div className='reddiv'>
  <span className='reddot'></span> 
  <span className='purchase'>Purchase.</span>
  </div>

   <div className='bluediv'>
   <span className='bluedot'></span><span className='sales'>Sales.</span> 
     </div> 
   
   <div className='lastdiv'>
   <span className='lastdot'></span>   <span className='newcustomer'>New Cutomer.</span>
   </div>

 
     {/* <div className='cont'> */}
     
 
    <FeaturedInfo/>
    <ColumnsGrid/>
    





</div>
  )
}

export default Container;
