import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import utilStyles from './utils.module.css'
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 5,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flex:1,
    padding:theme.spacing(3),
  },
  img: {
    marginLeft:15,
    maxWidth:'90%',
    maxHeight:'100%',
    objectFit:'contain',
    backgroundSize:'cover'
  },
  imgToolbar: {
    marginLeft:0
  },
}));

export const MiniDrawer = () => {
  
  const [titleToolbar,setTitleToolbar]=useState(true)
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (e,sport) => {
    setSelectedIndex(sport);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setTitleToolbar(!titleToolbar)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTitleToolbar(!titleToolbar)
  };

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
          </Typography>
          { titleToolbar ? <div><img alt="" src="/logow.png" className={classes.imgToolbar}></img></div>: <></>}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div><img alt="" src="/logow.png" className={classes.img}></img></div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
            <ListItem button selected={selectedIndex === 'Calcio'} onClick={ (e) => handleListItemClick(e, 'Calcio') }>
              <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
              <ListItemText primary='Calcio' />
            </ListItem>

            <ListItem button selected={selectedIndex === 'Pallavvolo'} onClick={ (e) => handleListItemClick(e, 'Pallavvolo')}>
              <ListItemIcon><SportsVolleyballIcon /></ListItemIcon>
              <ListItemText primary='Pallavvolo' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Basket'} onClick={ (e) => handleListItemClick(e, 'Basket') }>
              <ListItemIcon><SportsBasketballIcon /></ListItemIcon>
              <ListItemText primary='Basket' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Rugby'} onClick={ (e) => handleListItemClick(e, 'Rugby')}>
              <ListItemIcon><SportsRugbyIcon /></ListItemIcon>
              <ListItemText primary='Rugby' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Football Americano'} onClick={(e) => handleListItemClick(e, 'Football Americano')}>
              <ListItemIcon><SportsFootballIcon /></ListItemIcon>
              <ListItemText primary='Football Americano' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Tennis'} onClick={ (e) => handleListItemClick(e, 'Tennis')}>
              <ListItemIcon><SportsTennisIcon /></ListItemIcon>
              <ListItemText primary='Tennis' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Paddle'} onClick={ (e) => handleListItemClick(e, 'Paddle')}>
              <ListItemIcon><SportsTennisIcon /></ListItemIcon>
              <ListItemText primary='Paddle' />
            </ListItem>
            <ListItem button selected={selectedIndex === 'Golf'} onClick={ (e) => handleListItemClick(e, 'Golf')}>
              <ListItemIcon><SportsGolfIcon /></ListItemIcon>
              <ListItemText primary='Golf' />
            </ListItem>
        </List>

        <Divider />

        <List>
          
            <ListItem button>
              <ListItemIcon> <MailIcon /></ListItemIcon>
              <ListItemText primary='Contacts' />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <RecentActorsIcon /></ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary='Log out' />
            </ListItem>
          
        </List>
      </Drawer>

      
      <main className={classes.content}>
        <div className={classes.toolbar} />

      <section className={utilStyles.headingMd}>
        <p className={utilStyles.intro}>Hello, We are <strong>WhoPlays</strong>. It is a software for <strong>@LineApp</strong>. You can contact us on <a className={utilStyles.linkEmail} href="mailto:lineapp@lineapp.it">lineapp@lineapp.it</a>.</p>
      </section>
      
      <div className={utilStyles.blogContainer}>
      <section className={utilStyles.headingMd}>
       <h1 className={utilStyles.headingLgB}>Blog</h1>
       <ul className={utilStyles.list}>

          <li className={utilStyles.listItem}>
             <a className={utilStyles.link} href="/">Users</a>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="">Up-to-date</time>
             </small>
          </li>
        
          <li className={utilStyles.listItem}>
             <a className={utilStyles.link} href="/">Covid-19 Analitycs and Statistics </a>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-11-09">November 9, 2020</time>
             </small>
          </li>

           <li className={utilStyles.listItem}>
             <a className={utilStyles.link} href="/">Your first React App </a>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-01-02">January 2, 2020</time>
             </small>
          </li>

          <li className={utilStyles.listItem}>
             <a className={utilStyles.link} href="/">Mongo DB, React js and Typescript all in one single web application </a>
             <br/>
             <small>
               <time className={utilStyles.headingSm} dateTime="2020-05-12">May 12, 2020</time>
             </small>
          </li>

       </ul>
      </section>
      </div>
      </main>
      
    </div>
  )

  
}
export default MiniDrawer;
