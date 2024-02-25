import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import { GiGymBag, GiTrophy, GiWhistle } from 'react-icons/gi';
import { ImPhone } from 'react-icons/im';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper, // Change background color
    boxShadow: 'none', // Remove box shadow
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center', // Center-align content
  },
  logo: {
    height: '50px',
    marginRight: theme.spacing(2),
  },
  tabs: {
    margin: '0 auto', // Center-align tabs
    textAlign: 'center', // Center-align tabs
  },
  tab: {
    minWidth: 'auto', // Allow tabs to shrink to content width
    padding: theme.spacing(1, 2), // Adjust padding
    color: theme.palette.text.primary, // Use text color from theme
  },
  activeTab: {
    fontWeight: 'bold', // Highlight active tab
  },
  cartButton: {
    marginLeft: theme.spacing(2),
  },
}));

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
          <img src={'/assets/sportsdenlogo.png'} alt="Logo" className={classes.logo} />
        </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="secondary"
        >
          <Tab
            icon={<InfoIcon />}
            label='About'
            component={NavLink}
            to='/about'
            className={classes.tab}
            activeClassName={classes.activeTab}
          />
          <Tab
            icon={<GiGymBag />}
            label='Essential Gear'
            component={NavLink}
            to='/gear'
            className={classes.tab}
            activeClassName={classes.activeTab}
          />
          <Tab
            icon={<GiWhistle />}
            label='Coaching'
            component={NavLink}
            to='/coaching'
            className={classes.tab}
            activeClassName={classes.activeTab}
          />
          <Tab
            icon={<GiTrophy />}
            label='Tournaments'
            component={NavLink}
            to='/tournaments'
            className={classes.tab}
            activeClassName={classes.activeTab}
          />
          <Tab
            icon={<ImPhone />}
            label='Contact'
            component={NavLink}
            to='/contact'
            className={classes.tab}
            activeClassName={classes.activeTab}
          />
        </Tabs>
        <NavLink to="/viewCart" className={classes.cartButton}>
          <IconButton color="primary">
            <ShoppingCartIcon />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
