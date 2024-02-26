import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2a2a2a', // Dark background color
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and nav links
    alignItems: 'center', // Center vertically
    padding: theme.spacing(1, 2), // Padding for toolbar
  },
  logoContainer: {
    textDecoration: 'none', // Remove underline from link
    color: '#ffffff', // White color for logo
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '60px', // Increase the height for the logo
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff', // White text color
    margin: theme.spacing(0, 1), // Adjust spacing between links
    '&:hover': {
      color: '#ffd166', // Lighter color on hover
    },
  },
  cartButton: {
    color: '#ffffff', // White color for cart icon
    fontSize: '1.5rem', // Increase the font size of the cart icon
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff', // White background color for search bar
    '&:hover': {
      backgroundColor: '#f5f5f5', // Lighter background color on hover
    },
    marginRight: theme.spacing(60),
    marginLeft: theme.spacing(5), // Increase left margin for the search bar
    width: 'auto',
  },
  searchIcon: {
    color: '#000000', // Black color for search icon
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#000000', // Black color for input text
    paddingLeft: theme.spacing(3),
  },
  inputInput: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(1), 
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to='/' className={classes.logoContainer}>
          <img src={'/assets/new-logo.svg'} alt="Logo" className={classes.logo} />
        </Link>
        <div className={classes.navLinks}>
          <Button component={NavLink} to='/about' className={classes.link} activeClassName={classes.activeLink}>About</Button>
          <Button component={NavLink} to='/gear' className={classes.link} activeClassName={classes.activeLink}>Essential Gear</Button>
          <Button component={NavLink} to='/coaching' className={classes.link} activeClassName={classes.activeLink}>Coaching</Button>
          <Button component={NavLink} to='/tournaments' className={classes.link} activeClassName={classes.activeLink}>Tournaments</Button>
          <Button component={NavLink} to='/contact' className={classes.link} activeClassName={classes.activeLink}>Contact</Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton to="/viewCart" component={NavLink} className={classes.cartButton}>
            <ShoppingCartIcon fontSize="large" /> {/* Increase the font size of the cart icon */}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
