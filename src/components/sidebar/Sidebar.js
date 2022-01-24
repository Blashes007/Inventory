import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import './sidebar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import FeaturedInfo from '../Featuredinfo/Featuredinfo';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileSharpIcon from '@material-ui/icons/InsertDriveFileSharp';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
 
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(40),
    width: 'auto',
    
    
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'white',
  
  
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color:'honeydew;',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      
      

      
    },
  },
}));

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


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: 80,
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  

    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'whitesmoke',
    flex: 1,
    

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundColor:'whitesmoke'
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const navigate = useNavigate();

  function Logout(){
    sessionStorage.clear();
    navigate("/");
   } 
  


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <h2 className= "dashboard">Dashboard</h2>
          
          <Search className='search'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search...."
              
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>
          <div className='accountcircle'>
          
          <img  src="admin.png" className='Adminicon' /><h3 className='admin'>Admin</h3>
          </div>

          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        className="sidebar"
        
      >
        <div className={classes.toolbar}>
       <h1 className='Heading'> C.M AUTO  </h1> 
        </div>
        
            
          
        <Divider />

              <Link to="/Dashboard" className="sidebarComponents">
              <li className="sidebarListItem" >
                <HomeSharpIcon className="sidebarIcon" />
                <h3 className="sidebaritem1" >Dashboard</h3> 
              </li>
              </Link>

              <Link to="/Customers" className="sidebarComponents">
              <li className="sidebarListItem" >
                <GroupIcon className="sidebarIcon" />
                <h3 className="sidebaritemm" >Customer</h3>
              </li>
              </Link>

              <li className="sidebarListItem">
                <ShoppingCartIcon className="sidebarIcon" />
                  <h3 className="sidebaritem2">Purchase</h3>
              </li>

              <li className="sidebarListItem">
              <img src="rupees.png" className="rupeesimg"/>
                  <h3 className="sidebaritem3">Sales</h3> 
              </li>

              <li className="sidebarListItem">
                <InsertDriveFileSharpIcon className="sidebarIcon" />
                <h3 className="sidebaritem4">Report</h3> 
              </li>

              <div>
              <h1 className='AccountPage'>Account Page</h1>
              </div>
          

              <div className="sidebarListItemLogout"  onClick={Logout}>        
             
              <img src="logouticon.png" className="logoutimg" />
                <h3 className="btnTxt">Sign out</h3>
            
            </div>
        <div className='version1'>
        <h3 className='version'>Version 1.0</h3>
        </div>
        
      </Drawer>
      {/* <main className={classes.content}> */}
        {/* <div className={classes.toolbar} /> */}
       {/* <div>

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
</div> */}
      {/* </main> */}
    </div>
    
  );
}