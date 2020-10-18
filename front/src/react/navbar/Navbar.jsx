import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function navbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="navbarBrand">
        <Link
          to="/passengers"
          style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
        >
          Listado de pasajeros
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="navbarText">
          <a style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}>
            Tomás gordyn
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}