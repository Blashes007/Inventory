import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
  PermIdentity
} from "@material-ui/icons";
import './sidebar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportIcon from '@mui/icons-material/Report';
import { Button } from "@material-ui/core";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FeaturedInfo from '../Featuredinfo/Featuredinfo';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileSharpIcon from '@material-ui/icons/InsertDriveFileSharp';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'lightgrey',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
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
  marginLeft: 15,
  marginTop:2,
  height:400,
  borderRadius:10,
  width:1050,
  
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
    backgroundColor:'whitesmoke'
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
const logouticon ={ transform: 'rotate(180deg)'}
export default function Sidebar() {
  const classes = useStyles();
  


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
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>
          <div className='accountcircle'>
          
          <AccountCircle fontSize="large" /><h3 className='admin'>Admin</h3>
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
      >
        <div className={classes.toolbar}>
       <h1> C.M AUTO  </h1> 
        </div>
        
            
          
        <Divider />
        
              <li className="sidebarListItem" >
                <HomeSharpIcon className="sidebarIcon" />
                <h3 className="sidebaritem1" >Dashboard</h3> 
              </li>

              <li className="sidebarListItem" >
                <GroupIcon className="sidebarIcon" />
                <h3 className="sidebaritemm" >Customer</h3>
              </li>

              <li className="sidebarListItem">
                <ShoppingCartIcon className="sidebarIcon" />
                  <h3 className="sidebaritem2">Purchase</h3>
              </li>

              <li className="sidebarListItem">
              
                <MonetizationOnIcon className="sidebarIcon" />
                  <h3 className="sidebaritem3">Sales</h3> 
              </li>

              <li className="sidebarListItem">
                <InsertDriveFileSharpIcon className="sidebarIcon" />
                <h3 className="sidebaritem4">Report</h3> 
              </li>

              
              <h1>Account Page</h1>
              <li className="sidebarListItemLogout" >        
             
               <LogoutIcon  className="btnTxt1"   style={logouticon}/>
                <h3 className="btnTxt">Logout</h3>
            
            </li>


      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        

      <div className='dotdiv'>
      <span className='greendot'></span>
      <span className='todayscollection'> Today's Collection</span> 
      </div>
        
        <div className='reddiv'>
        <span className='reddot'></span> <span className='purchase'>Purchase</span>
        </div>

         <div className='bluediv'>
         <span className='bluedot'></span><span>Sales</span> 
           </div> 
         
         <div className='lastdiv'>
         <span className='lastdot'></span>   <span>NewCutomer</span>
         </div>
           
       
        <FeaturedInfo/>
        <Grid container color ="blue" spacing={2}>
  <Grid item xs={12}>
  <Item></Item>
  </Grid>
  
  
</Grid>
      </main>
    </div>
  );
}