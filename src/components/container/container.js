
import React from 'react';
import Paper from '@mui/material/Paper';
import FeaturedInfo from '../Featuredinfo/Featuredinfo';
import { styled } from '@mui/material/styles';
import './container.css';
import Grid from '@mui/material/Grid';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor:"white",
    marginLeft: 340,
    marginTop:2,
    height:400,
    borderRadius:10,
    width:1125,
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
    <Grid container color ="blue" spacing={2}>
<Grid item xs={12}>
<Item></Item>
</Grid>


</Grid>
    





</div>
  )
}

export default Container;
