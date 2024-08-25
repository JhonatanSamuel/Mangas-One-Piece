import { Link } from "react-router-dom";
import {  LiHome, Nav, LinkS } from '../styles';

function Navbar() {
  return (
    <Nav>
      <ul>
          <LiHome><LinkS to="/">Home</LinkS></LiHome>
         
      </ul>
      
    </Nav>
  );
}

export default Navbar;