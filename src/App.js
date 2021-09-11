import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import './index.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gear from './components/pages/Gear';
import About from './components/pages/About';
import Coaching from './components/pages/Coaching';
import Tournaments from './components/pages/Tournaments';
import Contact from './components/pages/Contact';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import { CartContext } from './CartContext';
import Store from './CartContext';





const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#4E5E8E",
    },
    secondary: {
      main: "#FF9912",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ]

  }

});


function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <Store>
          <Router>
            <NavBar />
            <switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/gear" exact component={Gear} />
              <Route path="/coaching" exact component={Coaching} />
              <Route path="/tournaments" exact component={Tournaments} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/viewCart" exact component={Cart} />
            </switch>
          </Router>
        </Store>

      </ThemeProvider>

    </div>

  );
}

export default App;
