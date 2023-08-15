import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';

function Header() {
  return (
    <div>
      <Navbar className="navbar-container">
        <Container>
          {/* Replace Navbar.Brand href with Link */}
          <Link to="/" className="navbar-brand">
            Walmart
          </Link>
          <Nav className="me-auto">
            {/* Use Link components for navigation links */}
            <Link to="/" className="nav-link">
              {/* Home */}
            </Link>
            <Link to="/products" className="nav-link">
              All Products
            </Link>
            <Link to="/pricing" className="nav-link">
              {/* Pricing */}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
