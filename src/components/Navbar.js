import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../icon.png';
import styled from 'styled-components';
import {Button} from './ButtonNavbar';

class Navbar extends Component {
  render(){
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt='store' className="navbar-brand"/>
        </Link>
        <Link to="/" className= "nav-link ml-auto">
        <Button>
          <span className="mr-2">
            <i class="fas fa-home"></i>
          </span>
          Home
        </Button>
        </Link>
        <Link to='/cart' className="ml-2">
          <Button>
            <span className="mr-2">
              <i class="fas fa-shopping-cart"></i>
            </span>
            Cart
          </Button>
        </Link>
        <Link to='/wishlist' className="ml-2">
          <Button>
            <span className="mr-2">
              <i class="fa fa-heart"/>
            </span>
            Wish List
          </Button>
        </Link>
      </Nav>
    );
}
}

const Nav = styled.nav`
background: var(--mainRed);
.nav-link{
  color: var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`;




export default Navbar;
