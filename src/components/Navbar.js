import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#6085ff' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-center" style={{  color: '#000', fontSize: '24px', fontWeight: 'bold' }}>
            Product Management System
          </Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page" style={{ color: '#000', fontSize: '22px', fontWeight: 'bold' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addProduct" className="nav-link active" style={{ color: '#000', fontSize: '22px', fontWeight: 'bold' }}>
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
