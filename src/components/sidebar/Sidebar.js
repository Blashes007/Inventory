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
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginLeft: 15,
  marginTop:30,
  height:400,
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
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
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
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
                <PermIdentity className="sidebarIcon" />
                <h4 className="sidebaritem1" >Dashboard</h4> 
              </li>

              <li className="sidebarListItem" >
                <PermIdentity className="sidebarIcon" />
                <h4 className="sidebaritemm" >Customer</h4>
              </li>

              <li className="sidebarListItem">
                <ShoppingCartIcon className="sidebarIcon" />
                  <h4 className="sidebaritem2">Purchase</h4>
              </li>

              <li className="sidebarListItem">
                <MonetizationOnIcon className="sidebarIcon" />
                  <h4 className="sidebaritem3">Sales</h4> 
              </li>

              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                <h4 className="sidebaritem4">Report</h4> 
              </li>

              
              <h1>Account Page</h1>
              <li className="sidebarListItemLogout" >        
             <Button >
               <LogoutIcon  className="btnTxt1"   style={logouticon}/> <h4 className="btnTxt">Logout</h4>
            </Button>
            </li>


      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
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