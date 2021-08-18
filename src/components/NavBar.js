import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ButtonCustom from './ButtonCustom';
import InfoIcon from '@material-ui/icons/Info';
import { GiGymBag, GiTrophy, GiWhistle } from 'react-icons/gi';
import { ImPhone } from 'react-icons/im';
import { NavLink, Link } from 'react-router-dom';





const Styles = makeStyles({
  bar: {
    textDecoration: "none",
    color: "#FF7F50",
    display: "flex",
    ['@media (max-width:780px)']: {
      flexDirection: "column"
    }

  },
  containerTabs: {
    marginLeft: 'auto',
    marginRight: 'auto',
    variant: 'fullWidth',

    flexContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    appbar: {
      width: "100vh",
      position: 'sticky',
      color: 'primary',
      flexGrow: '1',
      display: 'flex'
    },
  }
})

function NavBar() {
  const classes = Styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar className={classes.appbar}>

        <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>

          <Link to='/'>
            <img src={'/assets/sportsdenlogo.png'} style={{ height: '60px', paddingRight: '20px', paddingTop: '5px' }} />
          </Link>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatiorColor='secondary'
            centered
            width="100%"
          >
            <Tab icon={<InfoIcon />} label='About' component={Link} exact to='/about'></Tab>
            <Tab icon={<GiGymBag />} label='Essential Gear' component={Link} exact to='/gear'></Tab>
            <Tab icon={<GiWhistle />} label='Coaching' component={Link} exact to='/coaching'></Tab>
            <Tab icon={<GiTrophy />} label='Tournaments' component={Link} exact to='/tournaments'></Tab>
            <Tab icon={<ImPhone />} label='Contact' component={Link} exact to='/contact'></Tab>


            <NavLink style={{ paddingTop: "15px", paddingLeft: "15px" }} exact to="/viewCart" className={classes.bar}>
              <ButtonCustom txt='View Cart'></ButtonCustom>
            </NavLink>



          </Tabs>
        </Toolbar>
      </AppBar>
    </>


  )
}

export default NavBar
