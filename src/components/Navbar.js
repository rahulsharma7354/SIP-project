import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import Member from './Users/Member';

export default class Navbar extends Component {
    UserNames() {
        alert("Rahul Sharma and Pooja Gupta");
    }
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center list-group-horizontal">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Products
                    </Link>
                 </li>
                 <li className="nav-item ml-5">
                    <Link onClick={()=>this.UserNames()} to="/" className="nav-link">
                       Team
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
