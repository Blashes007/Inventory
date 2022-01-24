
import React from 'react';
import Paper from '@mui/material/Paper';
import FeaturedInfo from '../Featuredinfo/Featuredinfo';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: 300,
    marginTop:2,
    height:400,
    borderRadius:10,
    width:1125,
    
  }));

function Container() {

    
  return(
  
  <div>

  <div className='dotdiv'>
<span className='greendot'></span>
<span className='todayscollection'>Today's Collection</span> 
</div>
  
  <div className='reddiv'>
  <span className='reddot'></span> <span className='purchase'>Purchase</span>
  </div>

   <div className='bluediv'>
   <span className='bluedot'></span><span className='sales'>Sales</span> 
     </div> 
   
   <div className='lastdiv'>
   <span className='lastdot'></span>   <span className='newcustomer'>NewCutomer</span>
   </div>

  
     
 
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
